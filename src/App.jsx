import React, { useState, useEffect } from "react";

const INITIAL_ENTRIES = [
  { id: "0001", club: "尾鷲バド同好会", pair: "(1部) 山田次郎・高橋大輔 (尾鷲バド同好会)", phone: "090-3067-5745", password: "108429" },
  { id: "0002", club: "尾鷲バド同好会", pair: "(1部) 松本太郎・佐藤美咲 (尾鷲バド同好会)", phone: "090-9075-2906", password: "382910" },
  { id: "0003", club: "尾鷲バド同好会", pair: "(1部) 井上翔太・高橋美咲 (尾鷲バド同好会)", phone: "090-7545-5772", password: "592814" },
  { id: "0004", club: "松阪BC", pair: "(1部) 佐藤直樹・松本美咲 (松阪BC)", phone: "090-4295-7197", password: "740281" }
];

const generatePassword = () => Math.floor(100000 + Math.random() * 900000).toString();

export default function App() {
  const [activeTab, setActiveTab] = useState("master");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("bts_entries");
    return saved ? JSON.parse(saved) : INITIAL_ENTRIES;
  });

  const [newClub, setNewClub] = useState("");
  const [newPair, setNewPair] = useState("");
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    localStorage.setItem("bts_entries", JSON.stringify(entries));
  }, [entries]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPasswordInput === "admin2026") {
      setIsAdmin(true);
      setAdminPasswordInput("");
    } else {
      alert("パスワードが違います");
    }
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!newClub || !newPair || !newPhone) {
      alert("すべての項目を入力してください");
      return;
    }
    const newId = String(entries.length + 1).padStart(4, "0");
    const newEntry = {
      id: newId,
      club: newClub,
      pair: newPair,
      phone: newPhone,
      password: generatePassword()
    };
    setEntries([...entries, newEntry]);
    setNewClub("");
    setNewPair("");
    setNewPhone("");
  };

  const handleDeleteEntry = (id) => {
    if (confirm("削除してもよろしいですか？")) {
      setEntries(entries.filter((e) => e.id !== id));
    }
  };

  const handleResetTestData = () => {
    if (confirm("テストデータを再生成しますか？")) {
      setEntries(INITIAL_ENTRIES);
      localStorage.setItem("bts_entries", JSON.stringify(INITIAL_ENTRIES));
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 text-slate-800">
      <div className="w-64 bg-slate-900 text-white p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8 tracking-wider">🏆 BTS</h1>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("master")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                activeTab === "master" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              ⚙️ マスタ設定
            </button>
            <button
              onClick={() => setActiveTab("entries")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                activeTab === "entries" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              👥 エントリー管理
            </button>
            <button
              onClick={() => setActiveTab("draw")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                activeTab === "draw" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              📊 ドロー編成
            </button>
            <button
              onClick={() => setActiveTab("matches")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                activeTab === "matches" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              📅 コート進行・スコア
            </button>
            <button
              onClick={() => setActiveTab("reception")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                activeTab === "reception" ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              ☑️ 受付処理
            </button>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {!isAdmin ? (
          <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-bold mb-6">管理者ログイン</h2>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input
                type="password"
                name="no_autocomplete_password"
                id="no_autocomplete_password"
                autoComplete="new-password"
                placeholder=""
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg text-center tracking-widest focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition"
              >
                ログイン
              </button>
            </form>
          </div>
        ) : (
          <div>
            {activeTab === "master" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">マスタ設定</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-semibold mb-4">テストデータ管理</h3>
                  <button
                    onClick={handleResetTestData}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    テストデータを初期化（数字6桁化）
                  </button>
                </div>
              </div>
            )}

            {activeTab === "entries" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">エントリー管理</h2>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
                  <h3 className="text-lg font-semibold mb-4">新規エントリー追加</h3>
                  <form onSubmit={handleAddEntry} className="grid grid-cols-4 gap-4">
                    <input
                      type="text"
                      placeholder="所属クラブ"
                      value={newClub}
                      onChange={(e) => setNewClub(e.target.value)}
                      className="px-4 py-2 border rounded-lg outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="ペア名"
                      value={newPair}
                      onChange={(e) => setNewPair(e.target.value)}
                      className="px-4 py-2 border rounded-lg outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="連絡先"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      className="px-4 py-2 border rounded-lg outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg transition"
                    >
                      ＋ 追加
                    </button>
                  </form>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold text-sm">
                        <th className="p-4">ID</th>
                        <th className="p-4">パスワード</th>
                        <th className="p-4">所属クラブ</th>
                        <th className="p-4">ペア</th>
                        <th className="p-4">連絡先</th>
                        <th className="p-4">操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {entries.map((entry) => (
                        <tr key={entry.id} className="hover:bg-slate-50">
                          <td className="p-4 font-mono font-bold text-emerald-700">{entry.id}</td>
                          <td className="p-4 font-mono font-bold text-amber-600">{entry.password}</td>
                          <td className="p-4">{entry.club}</td>
                          <td className="p-4">{entry.pair}</td>
                          <td className="p-4 text-slate-500">{entry.phone}</td>
                          <td className="p-4">
                            <button
                              onClick={() => handleDeleteEntry(entry.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                            >
                              削除
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}