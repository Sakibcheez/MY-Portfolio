import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { X, Lock, Upload, Save, RotateCcw, RotateCw, Crop } from "lucide-react";

const EDIT_PASSWORD = "sakib2026";

function PhotoEditor({ src, onSave, onCancel }) {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const previewRef = useRef(null);

  const rotateLeft = () => { setRotation(r => (r - 90 + 360) % 360); setOffset({ x: 0, y: 0 }); };
  const rotateRight = () => { setRotation(r => (r + 90) % 360); setOffset({ x: 0, y: 0 }); };

  const onMouseDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    setOffset({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  };
  const onMouseUp = () => setDragging(false);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    setDragging(true);
    dragStart.current = { x: t.clientX - offset.x, y: t.clientY - offset.y };
  };
  const onTouchMove = (e) => {
    if (!dragging) return;
    const t = e.touches[0];
    setOffset({ x: t.clientX - dragStart.current.x, y: t.clientY - dragStart.current.y });
  };

  const handleSave = () => {
    // Portrait output matches the avatar frame ratio (280 × 340 ≈ 4:5)
    const outW = 400, outH = 500;
    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      const previewEl = previewRef.current;
      const previewW = previewEl?.clientWidth || 260;
      const previewH = previewEl?.clientHeight || 325;
      // Cover scale: fill outW×outH at minimum zoom
      const coverScale = Math.max(outW / img.width, outH / img.height);
      ctx.fillStyle = "#0c0c0e";
      ctx.fillRect(0, 0, outW, outH);
      ctx.save();
      ctx.translate(
        outW / 2 + offset.x * (outW / previewW),
        outH / 2 + offset.y * (outH / previewH),
      );
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale * coverScale, scale * coverScale);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();
      onSave(canvas.toDataURL("image/jpeg", 0.92));
    };
    img.src = src;
  };

  return (
    <div className="photo-editor">
      <div
        ref={previewRef}
        className="photo-editor-preview"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        <img
          src={src}
          draggable={false}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) scale(${scale})`,
            transformOrigin: "center center",
            transition: dragging ? "none" : "transform 0.15s ease",
          }}
          alt=""
        />
      </div>
      <div className="photo-editor-controls">
        <button className="btn btn-ghost" style={{ padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 5 }} onClick={rotateLeft}>
          <RotateCcw size={14} /> Left
        </button>
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", fontSize: "0.7rem", color: "var(--ink-dim)", fontFamily: "var(--mono)", textTransform: "uppercase", marginBottom: 5 }}>Zoom</label>
          <input type="range" min="0.5" max="3" step="0.05" value={scale}
            onChange={e => setScale(+e.target.value)} style={{ width: "100%", accentColor: "var(--accent)" }} />
        </div>
        <button className="btn btn-ghost" style={{ padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 5 }} onClick={rotateRight}>
          <RotateCw size={14} /> Right
        </button>
      </div>
      <p className="hint" style={{ textAlign: "center", marginBottom: 12 }}>Drag to reposition · Slider to zoom</p>
      <div className="btn-row">
        <button className="btn btn-primary" onClick={handleSave}>Apply crop &amp; rotate</button>
        <button className="btn btn-ghost" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default function EditPanel({ data, setData, onClose, onReset }) {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [draft, setDraft] = useState(JSON.parse(JSON.stringify(data)));
  const [editingPhoto, setEditingPhoto] = useState(null);

  const tryAuth = () => {
    if (pw === EDIT_PASSWORD) { setAuthed(true); setErr(""); }
    else setErr("Incorrect password.");
  };

  const set = (k, v) => setDraft(d => ({ ...d, [k]: v }));

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setEditingPhoto(reader.result);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const save = () => { setData(draft); onClose(); };

  if (editingPhoto) {
    return (
      <div className="overlay" onClick={() => setEditingPhoto(null)}>
        <motion.div
          className="modal"
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
        >
          <h2 style={{ fontFamily: "var(--display)", fontSize: "1.4rem", marginBottom: 16 }}>Crop &amp; Rotate Photo</h2>
          <PhotoEditor
            src={editingPhoto}
            onSave={(dataUrl) => { set("photo", dataUrl); setEditingPhoto(null); }}
            onCancel={() => setEditingPhoto(null)}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="overlay" onClick={onClose}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
      >
        {!authed ? (
          <>
            <h2>Owner access</h2>
            <p className="sub">Editing is restricted. Enter your password to continue.</p>
            <div className="field">
              <label><Lock size={11} style={{ verticalAlign: "middle", marginRight: 5 }} />Password</label>
              <input
                type="password"
                value={pw}
                autoFocus
                onChange={(e) => setPw(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && tryAuth()}
                placeholder="••••••••"
              />
              {err && <p className="hint" style={{ color: "var(--accent)" }}>{err}</p>}
            </div>
            <div className="btn-row">
              <button className="btn btn-primary" onClick={tryAuth}>Unlock</button>
              <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <div>
                <h2>Edit your portfolio</h2>
                <p className="sub">Changes save to this browser/device only.</p>
              </div>
              <button className="btn btn-ghost" onClick={onClose} style={{ padding: 8 }}><X size={16} /></button>
            </div>

            <div className="photo-row">
              {draft.photo
                ? <img className="photo-prev" src={draft.photo} alt="" />
                : <div className="photo-prev" style={{ display: "grid", placeItems: "center", fontFamily: "var(--display)", color: "var(--accent-2)" }}>?</div>}
              <div>
                <label className="btn btn-ghost" style={{ cursor: "pointer", display: "inline-flex", gap: 6, alignItems: "center" }}>
                  <Upload size={14} /> Upload photo
                  <input type="file" accept="image/*" hidden onChange={handlePhoto} />
                </label>
                {draft.photo && (
                  <button className="btn btn-ghost" style={{ marginTop: 8, display: "inline-flex", gap: 6, alignItems: "center" }}
                    onClick={() => setEditingPhoto(draft.photo)}>
                    <Crop size={14} /> Crop &amp; rotate
                  </button>
                )}
                <p className="hint">JPG/PNG. Stored locally in your browser.</p>
              </div>
            </div>

            <div className="field"><label>Name</label><input value={draft.name} onChange={(e) => set("name", e.target.value)} /></div>
            <div className="field"><label>Title / Role</label><input value={draft.title} onChange={(e) => set("title", e.target.value)} /></div>
            <div className="field"><label>Summary</label><textarea rows={5} value={draft.summary} onChange={(e) => set("summary", e.target.value)} /></div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div className="field"><label>Email</label><input value={draft.email} onChange={(e) => set("email", e.target.value)} /></div>
              <div className="field"><label>Phone (Primary)</label><input value={draft.phone} onChange={(e) => set("phone", e.target.value)} /></div>
              <div className="field"><label>Phone (Secondary)</label><input value={draft.phone2 || ""} onChange={(e) => set("phone2", e.target.value)} /></div>
              <div className="field"><label>WhatsApp URL</label><input value={draft.whatsapp || ""} onChange={(e) => set("whatsapp", e.target.value)} /></div>
              <div className="field"><label>Location</label><input value={draft.location} onChange={(e) => set("location", e.target.value)} /></div>
              <div className="field"><label>LinkedIn URL</label><input value={draft.linkedin} onChange={(e) => set("linkedin", e.target.value)} /></div>
              <div className="field"><label>GitHub URL</label><input value={draft.github} onChange={(e) => set("github", e.target.value)} /></div>
              <div className="field"><label>Website URL</label><input value={draft.website || ""} onChange={(e) => set("website", e.target.value)} /></div>
              <div className="field"><label>Facebook URL</label><input value={draft.facebook || ""} onChange={(e) => set("facebook", e.target.value)} /></div>
              <div className="field"><label>Instagram URL</label><input value={draft.instagram || ""} onChange={(e) => set("instagram", e.target.value)} /></div>
              <div className="field"><label>LeetCode URL</label><input value={draft.leetcode || ""} onChange={(e) => set("leetcode", e.target.value)} /></div>
            </div>

            <p className="hint" style={{ marginBottom: 4 }}>
              For deeper edits (projects, experience, skills), edit <code>src/data.js</code> in your repo.
            </p>

            <div className="btn-row">
              <button className="btn btn-primary" onClick={save}><Save size={14} style={{ verticalAlign: "middle", marginRight: 6 }} />Save changes</button>
              <button className="btn btn-ghost" onClick={() => { onReset(); onClose(); }}><RotateCcw size={14} style={{ verticalAlign: "middle", marginRight: 6 }} />Reset to default</button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
