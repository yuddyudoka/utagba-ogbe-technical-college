import { useEffect, useMemo, useState } from "react";
import { Check, ImagePlus, LogOut, Save } from "lucide-react";
import { programmes as fallbackProgrammes, type Programme } from "@/data/programmes";
import Seo from "@/components/Seo";

type Notice = { type: "success" | "error"; message: string } | null;

const inputClass =
  "w-full border border-black/15 bg-white px-3 py-2.5 text-sm text-[#171717] outline-none transition focus:border-[#f4b224] focus:ring-2 focus:ring-[#f4b224]/20";
const labelClass =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.08em] text-[#5d5d5d]";

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Unable to sign in.");
      }
      onSuccess();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Seo
        title="Programme Admin"
        description="Protected programme content management for Utagba-Ogbe Technical College."
        path="/admin"
        noIndex
      />
      <main className="min-h-screen bg-[#f3f1eb] px-5 py-12 flex items-center justify-center">
      <section className="w-full max-w-[420px] border border-black/10 bg-[#fbfaf7] p-7 sm:p-9">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#a66f00]">
            Utagba-Ogbe Technical College
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#171717]">
            Programme Admin
          </h1>
          <p className="mt-2 text-sm leading-6 text-[#666]">
            Sign in to update course-list and course-detail information.
          </p>
        </div>

        <form onSubmit={submit}>
          <label htmlFor="admin-password" className={labelClass}>Admin password</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputClass}
          />
          {error && <p role="alert" className="mt-3 text-sm text-[#b42318]">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full bg-[#171717] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#303030] disabled:cursor-wait disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
      </main>
    </>
  );
}

export default function Admin() {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [items, setItems] = useState<Programme[]>(fallbackProgrammes);
  const [selectedSlug, setSelectedSlug] = useState(fallbackProgrammes[0].slug);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);

  const selectedIndex = useMemo(
    () => items.findIndex((item) => item.slug === selectedSlug),
    [items, selectedSlug],
  );
  const selected = items[selectedIndex] || items[0];

  async function loadProgrammes() {
    const response = await fetch("/api/admin/programmes");
    if (response.status === 401) {
      setAuthenticated(false);
      return;
    }
    if (!response.ok) throw new Error("Programme data could not be loaded.");
    const result = await response.json();
    if (Array.isArray(result.programmes)) setItems(result.programmes);
  }

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then(async (result) => {
        setAuthenticated(Boolean(result.authenticated));
        if (result.authenticated) await loadProgrammes();
      })
      .catch(() => setAuthenticated(false))
      .finally(() => setChecking(false));
  }, []);

  function updateSelected(patch: Partial<Programme>) {
    setItems((current) =>
      current.map((item, index) =>
        index === selectedIndex ? { ...item, ...patch } : item,
      ),
    );
    setNotice(null);
  }

  async function publish(nextItems = items, successMessage = "Changes published.") {
    setSaving(true);
    setNotice(null);
    try {
      const response = await fetch("/api/admin/programmes", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ programmes: nextItems }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "Changes could not be saved.");
      setItems(nextItems);
      setNotice({ type: "success", message: successMessage });
    } catch (error) {
      setNotice({
        type: "error",
        message: error instanceof Error ? error.message : "Changes could not be saved.",
      });
    } finally {
      setSaving(false);
    }
  }

  async function uploadImage(file: File) {
    if (!selected) return;
    setUploading(true);
    setNotice(null);
    try {
      const response = await fetch(
        `/api/admin/programme-image?slug=${encodeURIComponent(selected.slug)}`,
        {
          method: "POST",
          headers: { "content-type": file.type },
          body: file,
        },
      );
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "Image upload failed.");

      const nextItems = items.map((item, index) =>
        index === selectedIndex ? { ...item, img: result.url } : item,
      );
      await publish(nextItems, "Image uploaded and published.");
    } catch (error) {
      setNotice({
        type: "error",
        message: error instanceof Error ? error.message : "Image upload failed.",
      });
    } finally {
      setUploading(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
  }

  if (checking) {
    return (
      <>
        <Seo
          title="Programme Admin"
          description="Protected programme content management for Utagba-Ogbe Technical College."
          path="/admin"
          noIndex
        />
        <main className="min-h-screen bg-[#f3f1eb] grid place-items-center text-sm text-[#666]">Loading admin...</main>
      </>
    );
  }
  if (!authenticated) {
    return <Login onSuccess={async () => { setAuthenticated(true); await loadProgrammes(); }} />;
  }

  return (
    <main className="min-h-screen bg-[#f3f1eb] text-[#171717]">
      <Seo
        title="Programme Admin"
        description="Protected programme content management for Utagba-Ogbe Technical College."
        path="/admin"
        noIndex
      />
      <header className="border-b border-black/10 bg-[#171717] text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f4b224]">Utagba-Ogbe</p>
            <h1 className="mt-1 text-lg font-bold">Programme Admin</h1>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
            <LogOut size={16} /> Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] md:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="border-b border-black/10 bg-[#eae7df] p-4 md:min-h-[calc(100vh-73px)] md:border-b-0 md:border-r">
          <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6d6a63]">Programmes</p>
          <nav className="grid gap-1 sm:grid-cols-2 md:grid-cols-1" aria-label="Programme editor">
            {items.map((item) => (
              <button
                key={item.slug}
                onClick={() => { setSelectedSlug(item.slug); setNotice(null); }}
                className={`flex min-w-0 items-center gap-3 px-3 py-2.5 text-left text-sm transition ${
                  item.slug === selected?.slug
                    ? "bg-[#171717] text-white"
                    : "text-[#35332e] hover:bg-black/5"
                }`}
              >
                <span className="w-6 shrink-0 font-mono text-[11px] text-[#b47c09]">{item.n}</span>
                <span className="truncate font-semibold">{item.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {selected && (
          <section className="px-5 py-7 md:px-9 md:py-9">
            <div className="mx-auto max-w-[900px]">
              <div className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#a66f00]">Editing programme {selected.n}</p>
                  <h2 className="mt-2 text-2xl font-bold">{selected.title}</h2>
                </div>
                <button
                  onClick={() => publish()}
                  disabled={saving || uploading}
                  className="inline-flex items-center justify-center gap-2 bg-[#f4b224] px-5 py-3 text-sm font-bold text-[#171717] transition hover:bg-[#e3a51f] disabled:cursor-wait disabled:opacity-60"
                >
                  <Save size={16} /> {saving ? "Publishing..." : "Save and publish"}
                </button>
              </div>

              {notice && (
                <div
                  role="status"
                  className={`mt-5 flex items-center gap-2 border px-4 py-3 text-sm ${
                    notice.type === "success"
                      ? "border-[#8cbf88] bg-[#edf7ec] text-[#245b20]"
                      : "border-[#e3a7a0] bg-[#fff1ef] text-[#8f251a]"
                  }`}
                >
                  {notice.type === "success" && <Check size={16} />}
                  {notice.message}
                </div>
              )}

              <div className="mt-7 grid gap-6">
                <div>
                  <span className={labelClass}>Programme image</span>
                  <div className="grid gap-4 sm:grid-cols-[220px_1fr] sm:items-center">
                    <img
                      src={selected.img}
                      alt={`Current programme image for ${selected.title}`}
                      className="h-[130px] w-full object-cover"
                    />
                    <div>
                      <label className="inline-flex cursor-pointer items-center gap-2 border border-black/20 bg-white px-4 py-2.5 text-sm font-bold hover:border-black/40">
                        <ImagePlus size={17} />
                        {uploading ? "Uploading..." : "Replace image"}
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          className="sr-only"
                          disabled={uploading}
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) uploadImage(file);
                            event.target.value = "";
                          }}
                        />
                      </label>
                      <p className="mt-2 text-xs leading-5 text-[#6a6862]">JPG, PNG, or WebP. Maximum 4 MB.</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="programme-title" className={labelClass}>Programme title</label>
                    <input id="programme-title" className={inputClass} value={selected.title} onChange={(event) => updateSelected({ title: event.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="programme-duration" className={labelClass}>Duration</label>
                    <input id="programme-duration" className={inputClass} value={selected.duration} onChange={(event) => updateSelected({ duration: event.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="programme-type" className={labelClass}>Certificate type</label>
                    <select id="programme-type" className={inputClass} value={selected.type} onChange={(event) => updateSelected({ type: event.target.value as Programme["type"] })}>
                      <option value="NTC">NTC</option>
                      <option value="NBC">NBC</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="programme-certificate" className={labelClass}>Certificate name</label>
                    <input id="programme-certificate" className={inputClass} value={selected.certificate} onChange={(event) => updateSelected({ certificate: event.target.value })} />
                  </div>
                </div>

                <div>
                  <label htmlFor="programme-overview" className={labelClass}>Programme overview</label>
                  <textarea id="programme-overview" rows={7} className={inputClass} value={selected.overview} onChange={(event) => updateSelected({ overview: event.target.value })} />
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <label htmlFor="programme-learn" className={labelClass}>What students will learn</label>
                    <textarea
                      id="programme-learn"
                      rows={8}
                      className={inputClass}
                      value={selected.whatYouWillLearn.join("\n")}
                      onChange={(event) => updateSelected({ whatYouWillLearn: event.target.value.split("\n").filter(Boolean) })}
                    />
                    <p className="mt-1.5 text-xs text-[#77736b]">Enter one item per line.</p>
                  </div>
                  <div>
                    <label htmlFor="programme-careers" className={labelClass}>Career outcomes</label>
                    <textarea
                      id="programme-careers"
                      rows={8}
                      className={inputClass}
                      value={selected.careerOutcomes.join("\n")}
                      onChange={(event) => updateSelected({ careerOutcomes: event.target.value.split("\n").filter(Boolean) })}
                    />
                    <p className="mt-1.5 text-xs text-[#77736b]">Enter one role per line.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
