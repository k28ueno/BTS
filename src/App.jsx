import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const getEnv = (key) => {
  try { return import.meta.env[key]; } catch (e) { return null; }
};
const supabaseUrl = getEnv('VITE_SUPABASE_URL') || 'YOUR_SUPABASE_URL';
const supabaseKey = getEnv('VITE_SUPABASE_ANON_KEY') || 'YOUR_SUPABASE_ANON_KEY';
const isSupabaseConfigured = supabaseUrl !== 'YOUR_SUPABASE_URL';

const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseKey) : null;

function IconUser() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
function IconTrophy() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>; }
function IconSettings() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>; }
function IconCheckCircle() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>; }
function IconSmartphone() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>; }
function IconSearch() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>; }
function IconMatch() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function IconRefresh() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>; }
function IconTrash() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>; }
function IconPlus() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>; }
function IconClock() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function IconDatabase() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>; }

const formatHHMM = (str) => {
  if (!str) return '08:50';
  const parts = str.split(':');
  if (parts.length < 2) return '08:50';
  return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}`;
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('home'); 
  const [dashTab, setDashTab] = useState('matches');
  const [adminTab, setAdminTab] = useState('settings');
  const [selectedClass, setSelectedClass] = useState('4部');
  const [dialog, setDialog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [config, setConfig] = useState({
    title: '2026年 紀北町体育協会長杯 バドミントン大会',
    date: '令和8年12月6日(日)',
    timeOpen: '8:00',
    timeReception: '8:15',
    timeStart: '8:50',
    venue: '紀北町東長島スポーツ公園体育館',
    deadline: '11月27日(金)',
    notes: '参加者は当日の8時40分までに受付を済ませる。当日ゴミは各自持ち帰り。昼食等は各自持参。',
    classes: ['1部', '2部', '3部', '4部'],
    courts: 8,
    fees: { '一般': 4000, '高校生まで': 2000 },
    advancementCondition: 'top2',
    avgMatchDuration: 15
  });

  const [entries, setEntries] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [drawClass, setDrawClass] = useState('4部');
  const [drawType, setDrawType] = useState('league'); 
  const [entryForm, setEntryForm] = useState({ club: '', p1Name: '', p1Club: '', p2Name: '', p2Club: '', feeCategory: '一般', cls: '4部', contact: '' });
  const [editLogin, setEditLogin] = useState({ id: '', password: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);

  const [receptionClassFilter, setReceptionClassFilter] = useState('all');
  const [receptionSearchQuery, setReceptionSearchQuery] = useState('');
  const [scoreModal, setScoreModal] = useState(null);

  const [testGenCounts, setTestGenCounts] = useState({});

  const [simCurrentTime, setSimCurrentTime] = useState('08:50');

  const [lastCourtReferees, setLastCourtReferees] = useState({});

  useEffect(() => {
    if (config.classes && config.classes.length > 0) {
      setTestGenCounts(prev => {
        const updated = { ...prev };
        config.classes.forEach(c => {
          if (updated[c] === undefined) updated[c] = 12;
        });
        return updated;
      });
    }
  }, [config.classes]);

  const setSimToNow = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    setSimCurrentTime(`${h}:${m}`);
  };

  const getPairFee = (ent) => {
    if (!ent) return 0;
    const cat = ent.feeCategory || ent.p1Fee || '一般';
    return config.fees[cat] ?? (cat === '高校生まで' ? 2000 : 4000);
  };

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      await fetchSettings();
      await fetchEntries();
      await fetchMatches();
      setLoading(false);
    };
    initializeData();
  }, []);

  const fetchSettings = async () => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.from('settings').select('*').eq('id', 1).maybeSingle();
        if (data && !error) {
          const loadedConfig = {
            title: data.title,
            date: data.date,
            timeOpen: data.timeopen,
            timeReception: data.timereception,
            timeStart: data.timestart,
            venue: data.venue,
            deadline: data.deadline,
            notes: data.notes,
            classes: data.classes || ['1部', '2部', '3部', '4部'],
            courts: data.courts || 8,
            fees: data.fees || { '一般': 4000, '高校生まで': 2000 },
            advancementCondition: data.advancementcondition || 'top2',
            avgMatchDuration: data.avgmatchduration || 15
          };
          setConfig(loadedConfig);
          const defaultTime = formatHHMM(loadedConfig.timeStart);
          setSimCurrentTime(defaultTime);

          if(loadedConfig.classes && loadedConfig.classes.length > 0) {
             setSelectedClass(loadedConfig.classes[0]);
             setDrawClass(loadedConfig.classes[0]);
             setEntryForm(prev => ({...prev, cls: loadedConfig.classes[0]}));
          }
        }
      } catch (err) {
        console.error("Settings fetch error:", err);
      }
    }
  };

  const fetchEntries = async () => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.from('entries').select('*').order('created_at', { ascending: true });
        if (!error && data) {
          const formatted = data.map(d => ({
            id: d.id,
            cls: d.cls,
            contact: d.contact,
            club: d.club || '',
            p1Name: d.p1name,
            p1Club: d.p1club,
            p1Fee: d.p1fee,
            p2Name: d.p2name,
            p2Club: d.p2club,
            p2Fee: d.p2fee,
            feeCategory: d.p1fee || '一般',
            password: d.password,
            checkedIn: d.checkedin,
            group: d.group,
            tournamentPosition: d.tournamentposition
          }));
          setEntries(formatted);
        }
      } catch (err) {
        console.error("Network error:", err);
      }
    }
  };

  const fetchMatches = async () => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.from('matches').select('*').order('match_order', { ascending: true });
        if (!error && data) {
          setMatches(data.map(m => ({
            id: m.id,
            cls: m.cls,
            group: m.group_name,
            matchType: m.match_type,
            courtNumber: m.court_number,
            team1Id: m.team1_id,
            team2Id: m.team2_id,
            team1Score: m.team1_score,
            team2Score: m.team2_score,
            status: m.status,
            matchOrder: m.match_order
          })));
        }
      } catch (err) {
        console.error("Matches fetch error:", err);
      }
    }
  };

  const handleSaveSettings = async () => {
    if (isSupabaseConfigured) {
      const payload = {
        id: 1,
        title: config.title,
        date: config.date,
        timeopen: config.timeOpen,
        timereception: config.timeReception,
        timestart: config.timeStart,
        venue: config.venue,
        deadline: config.deadline,
        notes: config.notes,
        classes: config.classes,
        courts: config.courts,
        fees: config.fees,
        advancementcondition: config.advancementCondition,
        avgmatchduration: config.avgMatchDuration
      };

      const { error } = await supabase.from('settings').upsert(payload);
      if (!error) {
        setDialog({ title: "保存完了", message: "大会マスタ設定をクラウドに保存しました。", onClose: () => setDialog(null) });
      } else {
        setDialog({ title: "エラー", message: "設定の保存に失敗しました。詳細: " + error.message, onClose: () => setDialog(null) });
      }
    }
  };

  const handleDeleteAllEntries = () => {
    setDialog({
      title: "全エントリーの削除確認",
      message: "登録されているすべてのエントリーデータと試合結果データを削除します。本当によろしいですか？",
      confirmText: "削除する",
      confirmBg: "bg-red-600 hover:bg-red-700",
      onConfirm: async () => {
        setEntries([]);
        setMatches([]);
        setLastCourtReferees({});
        if (isSupabaseConfigured) {
          await supabase.from('entries').delete().gt('created_at', '1970-01-01');
          await supabase.from('matches').delete().gt('created_at', '1970-01-01');
        }
        setDialog({ title: "削除完了", message: "すべてのエントリーおよび試合データを削除しました。", onClose: () => setDialog(null) });
      },
      onClose: () => setDialog(null)
    });
  };

  const handleGenerateTestData = async () => {
    const clubs = ['熊野バドミントン', '紀北クラブ', '松阪BC', '伊勢シャトルズ', '尾鷲バド同好会', '津フェニックス'];
    const familyNames = ['佐藤', '鈴木', '高橋', '田中', '伊藤', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村'];
    const givenNames = ['太郎', '次郎', '健太', '大輔', '直樹', '拓也', '翔太', '花子', '美咲', '彩乃', '葵', '優花', '結衣', '陽菜'];

    const newEntries = [];
    const dbPayloads = [];

    let currentIdCount = entries.length;

    config.classes.forEach(cls => {
      const numPerClass = parseInt(testGenCounts[cls]) || 0;
      for (let i = 1; i <= numPerClass; i++) {
        currentIdCount++;
        const newId = currentIdCount.toString().padStart(4, '0');
        const generatedPassword = Math.floor(1000 + Math.random() * 9000).toString();
        const clubName = clubs[Math.floor(Math.random() * clubs.length)];
        
        const p1 = `${familyNames[Math.floor(Math.random() * familyNames.length)]}${givenNames[Math.floor(Math.random() * givenNames.length)]}`;
        const p2 = `${familyNames[Math.floor(Math.random() * familyNames.length)]}${givenNames[Math.floor(Math.random() * givenNames.length)]}`;

        const pairFeeCategory = Math.random() > 0.4 ? '一般' : '高校生まで';

        const entryObj = {
          id: newId,
          cls: cls,
          contact: `090-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
          club: clubName,
          p1Name: p1,
          p1Club: clubName,
          p1Fee: pairFeeCategory,
          p2Name: p2,
          p2Club: clubName,
          p2Fee: pairFeeCategory,
          feeCategory: pairFeeCategory,
          password: generatedPassword,
          checkedIn: false,
          group: '未割り当て',
          tournamentPosition: null
        };

        newEntries.push(entryObj);

        dbPayloads.push({
          id: newId,
          cls: cls,
          contact: entryObj.contact,
          club: clubName,
          p1name: p1,
          p1club: clubName,
          p1fee: pairFeeCategory,
          p2name: p2,
          p2club: clubName,
          p2fee: pairFeeCategory,
          password: generatedPassword,
          checkedin: false,
          group: '未割り当て',
          tournamentposition: null
        });
      }
    });

    if (newEntries.length === 0) {
      setDialog({ title: "注意", message: "生成する組数が設定されていません。各クラスの組数を入力してください。", onClose: () => setDialog(null) });
      return;
    }

    const updatedEntries = [...entries, ...newEntries];
    setEntries(updatedEntries);

    if (isSupabaseConfigured && dbPayloads.length > 0) {
      await supabase.from('entries').insert(dbPayloads);
    }

    setDialog({
      title: "テストデータ作成完了",
      message: `合計 ${newEntries.length} 組のテストエントリーを作成しました。`,
      onClose: () => setDialog(null)
    });
  };

  const handleExportBackup = () => {
    const backupData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      config: config,
      entries: entries,
      matches: matches,
      lastCourtReferees: lastCourtReferees
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const now = new Date();
    const dateStr = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}${now.getMinutes().toString().padStart(2,'0')}`;
    
    link.href = url;
    link.download = `badminton_backup_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data || !data.config || !Array.isArray(data.entries) || !Array.isArray(data.matches)) {
          throw new Error('バックアップファイルのフォーマットが正しくありません。');
        }

        setDialog({
          title: "バックアップ復元の確認",
          message: "現在のすべての設定・エントリー・試合結果データを上書き復元します。本当によろしいですか？",
          confirmText: "復元する",
          confirmBg: "bg-[#2c5f4e] hover:bg-[#1f4236]",
          onConfirm: async () => {
            setLoading(true);
            
            setConfig(data.config);
            setEntries(data.entries);
            setMatches(data.matches);
            if (data.lastCourtReferees) {
              setLastCourtReferees(data.lastCourtReferees);
            }

            if (isSupabaseConfigured) {
              await supabase.from('entries').delete().gt('created_at', '1970-01-01');
              await supabase.from('matches').delete().gt('created_at', '1970-01-01');

              const payloadSettings = {
                id: 1,
                title: data.config.title,
                date: data.config.date,
                timeopen: data.config.timeOpen,
                timereception: data.config.timeReception,
                timestart: data.config.timeStart,
                venue: data.config.venue,
                deadline: data.config.deadline,
                notes: data.config.notes,
                classes: data.config.classes,
                courts: data.config.courts,
                fees: data.config.fees,
                advancementcondition: data.config.advancementCondition,
                avgmatchduration: data.config.avgMatchDuration
              };
              await supabase.from('settings').upsert(payloadSettings);

              if (data.entries.length > 0) {
                const dbEntries = data.entries.map(ent => ({
                  id: ent.id,
                  cls: ent.cls,
                  contact: ent.contact,
                  club: ent.club,
                  p1name: ent.p1Name,
                  p1club: ent.p1Club,
                  p1fee: ent.p1Fee,
                  p2name: ent.p2Name,
                  p2club: ent.p2Club,
                  p2fee: ent.p2Fee,
                  password: ent.password,
                  checkedin: ent.checkedIn,
                  group: ent.group,
                  tournamentposition: ent.tournamentPosition
                }));
                await supabase.from('entries').insert(dbEntries);
              }

              if (data.matches.length > 0) {
                const dbMatches = data.matches.map(m => ({
                  id: m.id,
                  cls: m.cls,
                  group_name: m.group,
                  match_type: m.matchType,
                  court_number: m.courtNumber,
                  team1_id: m.team1Id,
                  team2_id: m.team2Id,
                  team1_score: m.team1Score,
                  team2_score: m.team2Score,
                  status: m.status,
                  match_order: m.matchOrder
                }));
                await supabase.from('matches').insert(dbMatches);
              }
            }

            setLoading(false);
            setDialog({ title: "復元完了", message: "バックアップデータからの復元が完了しました！", onClose: () => setDialog(null) });
          },
          onClose: () => setDialog(null)
        });
      } catch (err) {
        console.error("Backup import error:", err);
        setDialog({ title: "復元エラー", message: "バックアップファイルの読み込みに失敗しました。詳細: " + err.message, onClose: () => setDialog(null) });
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const handleDragStart = (e, entryId) => { e.dataTransfer.setData('text/plain', entryId); };
  const handleMatchDragStart = (e, matchId) => { e.dataTransfer.setData('text/match-id', matchId); };
  const handleDragOver = (e) => { e.preventDefault(); };
  
  const handleDrop = async (e, targetGroup) => {
    e.preventDefault();
    const entryId = e.dataTransfer.getData('text/plain');
    if (!entryId) return;

    const targetEntry = entries.find(ent => ent.id === entryId);
    const updatedEntries = entries.map(ent => ent.id === entryId ? { ...ent, group: targetGroup } : ent);
    setEntries(updatedEntries);

    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ group: targetGroup }).eq('id', entryId);
    }

    if (targetEntry) {
      await generateLeagueMatches(targetEntry.cls, updatedEntries);
    }
  };

  const getActiveMatchForCourt = (courtNum) => {
    const courtMatches = matches.filter(m => Number(m.courtNumber) === Number(courtNum));
    if (courtMatches.length === 0) return null;

    const active = courtMatches.find(m => m.status === 'calling' || m.status === 'recepted' || m.status === 'in_progress');
    if (active) return active;

    const completedList = courtMatches.filter(m => m.status === 'completed');
    if (completedList.length > 0) {
      return completedList[completedList.length - 1];
    }

    return null;
  };

  const handleCourtDrop = async (e, courtNum) => {
    e.preventDefault();
    const matchId = e.dataTransfer.getData('text/match-id');
    if (!matchId) return;

    const targetMatch = matches.find(m => m.id === matchId);
    if (!targetMatch) return;

    const busyMatch = matches.find(m => 
      m.id !== matchId && 
      m.courtNumber !== null && 
      (m.status === 'calling' || m.status === 'recepted' || m.status === 'in_progress') &&
      (m.team1Id === targetMatch.team1Id || m.team1Id === targetMatch.team2Id ||
       m.team2Id === targetMatch.team1Id || m.team2Id === targetMatch.team2Id)
    );

    if (busyMatch) {
      const busyTeamId = (busyMatch.team1Id === targetMatch.team1Id || busyMatch.team1Id === targetMatch.team2Id)
        ? busyMatch.team1Id
        : busyMatch.team2Id;
      const busyTeamName = getTeamNameWithClub(busyTeamId);

      setDialog({
        title: "コート配置不可",
        message: `「${busyTeamName}」は現在第${busyMatch.courtNumber}コートで進行中（または呼び出し中）です。同一ペアを同時に複数コートへ配置することはできません。`,
        onClose: () => setDialog(null)
      });
      return;
    }

    const currentActiveOnCourt = getActiveMatchForCourt(courtNum);
    if (currentActiveOnCourt && (currentActiveOnCourt.status === 'in_progress' || currentActiveOnCourt.status === 'recepted')) {
      setDialog({ title: "ドロップ不可", message: "進行中のコートには新しい試合をドラッグ割り当てできません。コート解除またはスコア確定を行ってください。", onClose: () => setDialog(null) });
      return;
    }

    const updated = matches.map(m => {
      if (Number(m.courtNumber) === Number(courtNum) && m.id !== matchId && m.status !== 'completed') {
        return { ...m, courtNumber: null, status: 'waiting' };
      }
      if (m.id === matchId) {
        const isScored = m.team1Score !== null && m.team2Score !== null;
        return { 
          ...m, 
          courtNumber: courtNum, 
          status: courtNum ? (isScored ? 'completed' : 'calling') : (isScored ? 'completed' : 'waiting')
        };
      }
      return m;
    });

    setMatches(updated);

    if (isSupabaseConfigured) {
      if (courtNum !== null && currentActiveOnCourt && currentActiveOnCourt.status !== 'completed') {
        await supabase.from('matches').update({ court_number: null, status: 'waiting' }).eq('id', currentActiveOnCourt.id);
      }
      await supabase.from('matches').update({ 
        court_number: courtNum, 
        status: courtNum ? ((targetMatch.team1Score !== null && targetMatch.team2Score !== null) ? 'completed' : 'calling') : ((targetMatch.team1Score !== null && targetMatch.team2Score !== null) ? 'completed' : 'waiting')
      }).eq('id', matchId);
    }
  };

  const handleMatchStatusChange = async (matchId, newStatus) => {
    const updated = matches.map(m => m.id === matchId ? { ...m, status: newStatus } : m);
    setMatches(updated);
    if (isSupabaseConfigured) {
      await supabase.from('matches').update({ status: newStatus }).eq('id', matchId);
    }
  };

  const handleTournamentDrop = async (e, position) => {
    e.preventDefault();
    const entryId = e.dataTransfer.getData('text/plain');
    if (!entryId) return;
    setEntries(entries.map(ent => {
      if (ent.id === entryId) return { ...ent, tournamentPosition: position };
      if (ent.tournamentPosition === position) return { ...ent, tournamentPosition: null };
      return ent;
    }));
    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ tournamentposition: null }).eq('tournamentposition', position).eq('cls', drawClass);
      await supabase.from('entries').update({ tournamentposition: position }).eq('id', entryId);
    }
  };

  const handleRemoveTournamentPosition = async (e) => {
    e.preventDefault();
    const entryId = e.dataTransfer.getData('text/plain');
    if (!entryId) return;
    setEntries(entries.map(ent => ent.id === entryId ? { ...ent, tournamentPosition: null } : ent));
    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ tournamentposition: null }).eq('id', entryId);
    }
  };

  const handleAutoDraw = async () => {
    const checkedInEntries = entries.filter(e => e.cls === drawClass && e.checkedIn);
    if (checkedInEntries.length === 0) {
      setDialog({ title: "ドロップ不可", message: `${drawClass} で受付済の組がありません。先に「受付処理」タブで受付を完了させてください。`, onClose: () => setDialog(null) });
      return;
    }
    const shuffled = [...checkedInEntries].sort(() => Math.random() - 0.5);
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const groupCount = Math.max(3, Math.ceil(shuffled.length / 4));
    const activeGroups = groups.slice(0, groupCount);
    
    const newEntries = [...entries];
    const updates = [];
    shuffled.forEach((ent, idx) => {
      const group = activeGroups[idx % activeGroups.length];
      const globalIdx = newEntries.findIndex(e => e.id === ent.id);
      if (globalIdx !== -1) {
        newEntries[globalIdx].group = group;
        updates.push({ id: ent.id, group: group });
      }
    });
    setEntries(newEntries);
    if (isSupabaseConfigured) {
      await Promise.all(updates.map(u => supabase.from('entries').update({ group: u.group }).eq('id', u.id)));
    }
    const matchCount = await generateLeagueMatches(drawClass, newEntries);
    setDialog({ title: "完了", message: `受付済の ${checkedInEntries.length} 組の自動振り分けと予選対戦カード（${matchCount}試合）の生成が完了しました！`, onClose: () => setDialog(null) });
  };

  const generateAllLeagueMatches = async (currentEntriesList) => {
    const activeEntries = currentEntriesList || entries;
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const classes = config.classes || ['1部', '2部', '3部', '4部'];

    const newMatches = [];
    let orderCounter = 1;
    const dbInserts = [];
    let totalGenerated = 0;

    const roundMatchesList = [];

    classes.forEach(cls => {
      const clsEntries = activeEntries.filter(e => e.cls === cls && e.checkedIn);
      const groupMatchesMap = {};
      let maxGroupMatches = 0;

      groups.forEach(groupName => {
        const groupTeams = clsEntries.filter(e => e.group === groupName);
        groupMatchesMap[groupName] = [];
        if (groupTeams.length >= 2) {
          for (let i = 0; i < groupTeams.length; i++) {
            for (let j = i + 1; j < groupTeams.length; j++) {
              groupMatchesMap[groupName].push({
                cls: cls,
                group_name: groupName,
                team1_id: groupTeams[i].id,
                team2_id: groupTeams[j].id
              });
            }
          }
          if (groupMatchesMap[groupName].length > maxGroupMatches) {
            maxGroupMatches = groupMatchesMap[groupName].length;
          }
        }
      });

      for (let round = 0; round < maxGroupMatches; round++) {
        groups.forEach(groupName => {
          if (groupMatchesMap[groupName] && groupMatchesMap[groupName][round]) {
            roundMatchesList.push({
              cls: cls,
              round: round,
              match: groupMatchesMap[groupName][round]
            });
          }
        });
      }
    });

    const maxRounds = 10;
    for (let r = 0; r < maxRounds; r++) {
      classes.forEach(cls => {
        const matchesInRound = roundMatchesList.filter(item => item.cls === cls && item.round === r);
        matchesInRound.forEach(item => {
          totalGenerated++;
          const m = item.match;
          const matchObj = {
            id: `M-${cls}-${m.group_name}-${m.team1_id}-${m.team2_id}`,
            cls: cls,
            group_name: m.group_name,
            match_type: 'league',
            court_number: null,
            team1_id: m.team1_id,
            team2_id: m.team2_id,
            team1_score: null,
            team2_score: null,
            status: 'waiting',
            match_order: orderCounter++
          };
          dbInserts.push(matchObj);
          newMatches.push({
            id: matchObj.id,
            cls: matchObj.cls,
            group: matchObj.group_name,
            matchType: matchObj.match_type,
            courtNumber: matchObj.court_number,
            team1Id: matchObj.team1_id,
            team2Id: matchObj.team2_id,
            team1Score: matchObj.team1_score,
            team2Score: matchObj.team2_score,
            status: matchObj.status,
            matchOrder: matchObj.match_order
          });
        });
      });
    }

    setMatches(newMatches);
    if (isSupabaseConfigured) {
      await supabase.from('matches').delete().gt('created_at', '1970-01-01');
      if (dbInserts.length > 0) {
        await supabase.from('matches').insert(dbInserts);
      }
    }
    return totalGenerated;
  };

  const generateLeagueMatches = async (targetCls, currentEntriesList) => {
    return await generateAllLeagueMatches(currentEntriesList);
  };

  const handleAutoDrawTournament = async () => {
    const checkedInEntries = entries.filter(e => e.cls === drawClass && e.checkedIn);
    if (checkedInEntries.length === 0) {
      setDialog({ title: "ドロップ不可", message: `${drawClass} で受付済の組がありません。先に「受付処理」タブで受付を完了させてください。`, onClose: () => setDialog(null) });
      return;
    }

    const clsEntries = entries.filter(e => e.cls === drawClass && e.checkedIn);
    const activeGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].filter(g => 
      clsEntries.some(e => e.group === g)
    );
    const groupCount = activeGroups.length;
    const advCondition = config.advancementCondition || 'top2';
    const numPerGroup = advCondition === 'top1' ? 1 : 2;

    let slotMapping = [];
    if (groupCount === 3 && numPerGroup === 2) {
      slotMapping = [
        { group: 'A', rank: 0, slot: 1 },
        { group: 'C', rank: 1, slot: 3 },
        { group: 'B', rank: 1, slot: 4 },
        { group: 'B', rank: 0, slot: 5 },
        { group: 'A', rank: 1, slot: 7 },
        { group: 'C', rank: 0, slot: 8 },
      ];
    } else if (groupCount === 2 && numPerGroup === 2) {
      slotMapping = [
        { group: 'A', rank: 0, slot: 1 },
        { group: 'B', rank: 1, slot: 2 },
        { group: 'B', rank: 0, slot: 3 },
        { group: 'A', rank: 1, slot: 4 },
      ];
    } else {
      slotMapping = [
        { group: 'A', rank: 0, slot: 1 },
        { group: 'B', rank: 1, slot: 2 },
        { group: 'B', rank: 0, slot: 3 },
        { group: 'A', rank: 1, slot: 4 },
        { group: 'C', rank: 0, slot: 5 },
        { group: 'D', rank: 1, slot: 6 },
        { group: 'D', rank: 0, slot: 7 },
        { group: 'C', rank: 1, slot: 8 },
      ];
    }

    const newEntries = [...entries];
    newEntries.forEach(ent => { if (ent.cls === drawClass) ent.tournamentPosition = null; });

    let assignedCount = 0;
    const updates = [];

    slotMapping.forEach(map => {
      const standings = getGroupStandings(drawClass, map.group);
      if (standings[map.rank] && map.rank < numPerGroup) {
        const teamId = standings[map.rank].id;
        const globalIdx = newEntries.findIndex(e => e.id === teamId);
        if (globalIdx !== -1) {
          newEntries[globalIdx].tournamentPosition = map.slot;
          updates.push({ id: teamId, tournamentposition: map.slot });
          assignedCount++;
        }
      }
    });

    setEntries(newEntries);
    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ tournamentposition: null }).eq('cls', drawClass);
      await Promise.all(updates.map(u => supabase.from('entries').update({ tournamentposition: u.tournamentposition }).eq('id', u.id)));
    }

    if (assignedCount > 0) {
      setDialog({ title: "順位反映完了", message: `予選結果に基づき、${assignedCount} 組を結勝トーナメント枠に割り当てました。手動で枠を変更することも可能です。`, onClose: () => setDialog(null) });
    } else {
      setDialog({ title: "完了", message: "予選グループ数に応じたトーナメント枠を設定しました。手動でドラッグ＆ドロップして位置を調整できます。", onClose: () => setDialog(null) });
    }
  };

  const handleEntrySubmit = async (e) => {
    e.preventDefault();
    const newId = (entries.length + 1).toString().padStart(4, '0');
    const generatedPassword = Math.floor(1000 + Math.random() * 9000).toString();
    const feeCat = entryForm.feeCategory || '一般';
    
    const dbPayload = {
      id: newId,
      cls: entryForm.cls,
      contact: entryForm.contact,
      club: entryForm.club,
      p1name: entryForm.p1Name,
      p1club: entryForm.p1Club,
      p1fee: feeCat,
      p2name: entryForm.p2Name,
      p2club: entryForm.p2Club,
      p2fee: feeCat,
      password: generatedPassword,
      checkedin: false,
      group: '未割り当て',
      tournamentposition: null
    };

    if (isSupabaseConfigured) {
      const { error } = await supabase.from('entries').insert([dbPayload]);
      if (error) {
        console.error("Entry error:", error);
        setDialog({ title: "エラー", message: "保存に失敗しました。詳細: " + error.message, onClose: () => setDialog(null) });
        return;
      }
    }

    const newEntryState = {
      ...entryForm,
      p1Fee: feeCat,
      p2Fee: feeCat,
      feeCategory: feeCat,
      id: newId,
      password: generatedPassword,
      checkedIn: false,
      group: '未割り当て',
      tournamentPosition: null
    };

    setEntries([...entries, newEntryState]);
    setDialog({
      title: "エントリー完了",
      message: (
        <div className="text-left">
          <p className="mb-2 text-green-600 font-bold">受付が完了しました！</p>
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
             <div className="flex justify-between border-b pb-2 mb-2"><span className="text-gray-500">ID:</span><strong className="text-lg font-mono">{newId}</strong></div>
             <div className="flex justify-between"><span className="text-gray-500">パスワード (数字4桁):</span><strong className="text-orange-600 font-mono text-lg">{generatedPassword}</strong></div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-3 mt-4 rounded">
             <p className="text-xs font-bold text-red-700">
               ⚠️ 注意：登録内容の修正・取消時に必要です
             </p>
             <p className="text-xs text-red-600 mt-1 font-bold">
               上記【ID】と【パスワード】の両方を、必ずメモやスクリーンショットで控えて保管してください。
             </p>
          </div>
        </div>
      ),
      onClose: () => { setDialog(null); setCurrentTab('home'); }
    });
    setEntryForm({ club: '', p1Name: '', p1Club: '', p2Name: '', p2Club: '', feeCategory: '一般', cls: config.classes[0] || '', contact: '' });
  };

  const handleEditLogin = (e) => {
    e.preventDefault();
    if (!/^\d{4}$/.test(editLogin.password)) {
      setDialog({ title: "エラー", message: "パスワードは半角数字4桁で入力してください。", onClose: () => setDialog(null) });
      return;
    }
    const target = entries.find(ent => ent.id === editLogin.id && ent.password === editLogin.password);
    if (target) {
      setEntryForm({ ...target, feeCategory: target.feeCategory || target.p1Fee || '一般' });
      setCurrentEditId(target.id);
      setEditMode(true);
      setCurrentTab('entry');
    } else {
      setDialog({ title: "エラー", message: "IDまたはパスワードが間違っています。", onClose: () => setDialog(null) });
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const feeCat = entryForm.feeCategory || '一般';
    const dbPayload = {
      cls: entryForm.cls,
      contact: entryForm.contact,
      club: entryForm.club,
      p1name: entryForm.p1Name,
      p1club: entryForm.p1Club,
      p1fee: feeCat,
      p2name: entryForm.p2Name,
      p2club: entryForm.p2Club,
      p2fee: feeCat
    };

    if (isSupabaseConfigured) {
      const { error } = await supabase.from('entries').update(dbPayload).eq('id', currentEditId);
      if (error) {
         setDialog({ title: "エラー", message: "更新に失敗しました。", onClose: () => setDialog(null) });
         return;
      }
    }

    setEntries(entries.map(ent => ent.id === currentEditId ? { ...entryForm, p1Fee: feeCat, p2Fee: feeCat, feeCategory: feeCat, id: currentEditId, password: ent.password, checkedIn: ent.checkedIn, group: ent.group, tournamentPosition: ent.tournamentPosition } : ent));
    setDialog({ title: "更新完了", message: "登録内容を更新しました。", onClose: () => { setDialog(null); setCurrentTab(isAdminLoggedIn ? 'admin' : 'home'); } });
    setEditMode(false);
    setCurrentEditId(null);
  };

  const handleDeleteSelfEntry = (id, p1Name) => {
    setDialog({
      title: "エントリー取消の確認",
      message: `${p1Name} ペアのエントリーを取り消します（登録が完全に削除されます）。本当によろしいですか？`,
      confirmText: "取消実行",
      confirmBg: "bg-red-600 hover:bg-red-700",
      onConfirm: async () => {
        if (isSupabaseConfigured) {
          await supabase.from('entries').delete().eq('id', id);
        }
        setEntries(entries.filter(e => e.id !== id));
        setEditMode(false);
        setCurrentEditId(null);
        setDialog({
          title: "取消完了",
          message: "エントリーを取り消しました。",
          onClose: () => { setDialog(null); setCurrentTab('home'); }
        });
      },
      onClose: () => setDialog(null)
    });
  };

  const handleDeleteEntry = async (id, p1Name) => {
    setDialog({
      title: "削除確認",
      message: `${p1Name} ペアのエントリーを削除しますか？`,
      confirmText: "削除する",
      confirmBg: "bg-red-600 hover:bg-red-700",
      onConfirm: async () => {
        if (isSupabaseConfigured) {
          await supabase.from('entries').delete().eq('id', id);
        }
        setEntries(entries.filter(e => e.id !== id));
        setDialog(null);
      },
      onClose: () => setDialog(null)
    });
  };

  const toggleCheckIn = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    setEntries(entries.map(e => e.id === id ? {...e, checkedIn: newStatus} : e));
    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ checkedin: newStatus }).eq('id', id);
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'admin2026') { setIsAdminLoggedIn(true); setAdminPassword(''); setCurrentTab('admin'); } 
    else { setDialog({ title: "エラー", message: "パスワードが間違っています。", onClose: () => setDialog(null) }); }
  };

  const handleAssignCourt = async (matchId, courtNum) => {
    const updated = matches.map(m => {
      if (m.courtNumber === courtNum && courtNum !== null) {
        if (m.id === matchId) return { ...m, courtNumber: courtNum, status: (m.team1Score !== null && m.team2Score !== null) ? 'completed' : 'calling' };
        return { ...m, courtNumber: null, status: (m.team1Score !== null && m.team2Score !== null) ? 'completed' : 'waiting' };
      }
      if (m.id === matchId) {
        const isScored = m.team1Score !== null && m.team2Score !== null;
        return { ...m, courtNumber: courtNum, status: courtNum ? (isScored ? 'completed' : 'calling') : (isScored ? 'completed' : 'waiting') };
      }
      return m;
    });

    setMatches(updated);

    if (isSupabaseConfigured) {
      if (courtNum !== null) {
        await supabase.from('matches').update({ court_number: null, status: 'waiting' }).eq('court_number', courtNum);
      }
      const targetMatch = matches.find(m => m.id === matchId);
      const isScored = targetMatch && targetMatch.team1Score !== null && targetMatch.team2Score !== null;
      await supabase.from('matches').update({ 
        court_number: courtNum, 
        status: courtNum ? (isScored ? 'completed' : 'calling') : (isScored ? 'completed' : 'waiting')
      }).eq('id', matchId);
    }
  };

  const handleSaveScore = async (matchId, s1, s2) => {
    const targetMatch = matches.find(m => m.id === matchId);
    const updated = matches.map(m => m.id === matchId ? {
      ...m,
      team1Score: s1,
      team2Score: s2,
      status: 'completed'
    } : m);
    setMatches(updated);

    if (isSupabaseConfigured) {
      await supabase.from('matches').update({
        team1_score: s1,
        team2_score: s2,
        status: 'completed'
      }).eq('id', matchId);
    }

    if (targetMatch && targetMatch.courtNumber !== null) {
      const winnerId = s1 >= s2 ? targetMatch.team1Id : targetMatch.team2Id;
      const loserId = s1 >= s2 ? targetMatch.team2Id : targetMatch.team1Id;
      const winnerName = getTeamNameWithClub(winnerId);
      const loserName = getTeamNameWithClub(loserId);

      setLastCourtReferees(prev => ({
        ...prev,
        [targetMatch.courtNumber]: {
          main: winnerName,
          line: loserName
        }
      }));
    }

    setScoreModal(null);

    setDialog({
      title: "スコア保存完了",
      message: (
        <div className="text-left space-y-3">
           <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg font-bold text-sm flex items-center gap-2">
              <IconCheckCircle /> 試合結果を保存しました ({s1} - {s2})
           </div>
        </div>
      ),
      onClose: () => setDialog(null)
    });
  };

  const getGroupStandings = (cls, groupName) => {
    const groupEntries = entries.filter(e => e.cls === cls && e.group === groupName);
    const groupMatches = matches.filter(m => m.cls === cls && m.group === groupName && m.status === 'completed');

    const stats = groupEntries.map(ent => {
      let wins = 0;
      let losses = 0;
      groupMatches.forEach(m => {
        if (m.team1Id === ent.id) {
          if (m.team1Score > m.team2Score) wins++;
          else if (m.team1Score < m.team2Score) losses++;
        } else if (m.team2Id === ent.id) {
          if (m.team2Score > m.team1Score) wins++;
          else if (m.team2Score < m.team1Score) losses++;
        }
      });
      return { ...ent, wins, losses };
    });

    return stats.sort((a, b) => b.wins - a.wins);
  };

  const getRefereeForMatch = (m) => {
    if (!m) return { main: '未定', line: '未定' };

    if (m.matchType === 'league') {
      if (m.courtNumber !== null && lastCourtReferees[m.courtNumber]) {
        return lastCourtReferees[m.courtNumber];
      }

      const groupTeams = entries
        .filter(e => e.cls === m.cls && e.group === m.group && e.checkedIn)
        .sort((a, b) => String(a.id).localeCompare(String(b.id)));
        
      const waitingTeams = groupTeams.filter(e => String(e.id) !== String(m.team1Id) && String(e.id) !== String(m.team2Id));

      if (waitingTeams.length >= 2) {
         return { main: getTeamNameWithClub(waitingTeams[0].id), line: getTeamNameWithClub(waitingTeams[1].id) };
      } else if (waitingTeams.length === 1) {
         const refName = getTeamNameWithClub(waitingTeams[0].id);
         return { main: refName, line: refName };
      } else {
         return { main: "他クラス空きペア応援", line: "他クラス空きペア応援" };
      }
    } else {
      return { main: "本部調整 / 敗者審判", line: "本部調整 / 敗者審判" };
    }
  };

  const getTournamentSlotInfo = (cls, pos) => {
    const manualTeam = entries.find(e => e.cls === cls && e.tournamentPosition === pos);
    if (manualTeam) {
      return { team: manualTeam, label: null, isBye: false };
    }

    const clsEntries = entries.filter(e => e.cls === cls && e.checkedIn);
    const activeGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].filter(g => 
      clsEntries.some(e => e.group === g)
    );
    const groupCount = activeGroups.length;
    const advCondition = config.advancementCondition || 'top2';
    const numPerGroup = advCondition === 'top1' ? 1 : 2;

    if (groupCount === 3 && numPerGroup === 2) {
      const slotRules6 = {
        1: { group: 'A', rank: 0, label: 'グループA 1位' },
        2: { isBye: true, label: 'シード (不戦勝)' },
        3: { group: 'C', rank: 1, label: 'グループC 2位' },
        4: { group: 'B', rank: 1, label: 'グループB 2位' },
        5: { group: 'B', rank: 0, label: 'グループB 1位' },
        6: { isBye: true, label: 'シード (不戦勝)' },
        7: { group: 'A', rank: 1, label: 'グループA 2位' },
        8: { group: 'C', rank: 0, label: 'グループC 1位' },
      };

      const rule = slotRules6[pos];
      if (rule) {
        if (rule.isBye) {
          return { team: null, label: 'シード (不戦勝)', isBye: true };
        }
        const standings = getGroupStandings(cls, rule.group);
        if (standings[rule.rank]) {
          const groupMatches = matches.filter(m => m.cls === cls && m.group === rule.group);
          const completedMatches = groupMatches.filter(m => m.status === 'completed');
          if (groupMatches.length > 0 && groupMatches.length === completedMatches.length) {
            return { team: standings[rule.rank], label: null, isBye: false };
          }
        }
        return { team: null, label: rule.label, isBye: false };
      }
    }

    if (groupCount === 2 && numPerGroup === 2) {
      const slotRules4 = {
        1: { group: 'A', rank: 0, label: 'グループA 1位' },
        2: { group: 'B', rank: 1, label: 'グループB 2位' },
        3: { group: 'B', rank: 0, label: 'グループB 1位' },
        4: { group: 'A', rank: 1, label: 'グループA 2位' },
      };
      const rule = slotRules4[pos];
      if (rule) {
        const standings = getGroupStandings(cls, rule.group);
        if (standings[rule.rank]) {
          const groupMatches = matches.filter(m => m.cls === cls && m.group === rule.group);
          const completedMatches = groupMatches.filter(m => m.status === 'completed');
          if (groupMatches.length > 0 && groupMatches.length === completedMatches.length) {
            return { team: standings[rule.rank], label: null, isBye: false };
          }
        }
        return { team: null, label: rule.label, isBye: false };
      }
      if (pos > 4) {
        return { team: null, label: '-', isBye: true };
      }
    }

    const slotRules8 = {
      1: { group: 'A', rank: 0, label: 'グループA 1位' },
      2: { group: 'B', rank: 1, label: 'グループB 2位' },
      3: { group: 'B', rank: 0, label: 'グループB 1位' },
      4: { group: 'A', rank: 1, label: 'グループA 2位' },
      5: { group: 'C', rank: 0, label: 'グループC 1位' },
      6: { group: 'D', rank: 1, label: 'グループD 2位' },
      7: { group: 'D', rank: 0, label: 'グループD 1位' },
      8: { group: 'C', rank: 1, label: 'グループC 2位' },
    };
    const rule = slotRules8[pos];
    if (rule) {
      const standings = getGroupStandings(cls, rule.group);
      if (standings[rule.rank] && rule.rank < numPerGroup) {
        const groupMatches = matches.filter(m => m.cls === cls && m.group === rule.group);
        const completedMatches = groupMatches.filter(m => m.status === 'completed');
        if (groupMatches.length > 0 && groupMatches.length === completedMatches.length) {
          return { team: standings[rule.rank], label: null, isBye: false };
        }
      }
      return { team: null, label: rule.label, isBye: false };
    }

    return { team: null, label: `枠 ${pos}`, isBye: false };
  };

  const calculateSimulation = () => {
    let totalEntries = entries.length;
    let totalLeagueRemaining = 0;
    let totalLeagueCompleted = 0;
    let totalLeagueMatches = 0;

    let totalTournamentRemaining = 0;
    let totalTournamentCompleted = 0;
    let totalTournamentMatches = 0;

    const classStats = config.classes.map(cls => {
      const clsEntries = entries.filter(e => e.cls === cls);
      const count = clsEntries.length;
      
      const groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      let activeGroupCount = 0;
      let calculatedLeagueTotal = 0;

      groupNames.forEach(g => {
        const inGroup = clsEntries.filter(e => e.group === g).length;
        if (inGroup > 0) {
          activeGroupCount++;
          calculatedLeagueTotal += (inGroup * (inGroup - 1)) / 2;
        }
      });

      const actualLeagueMatches = matches.filter(m => m.cls === cls && m.matchType === 'league');
      const leagueTotal = actualLeagueMatches.length > 0 ? actualLeagueMatches.length : calculatedLeagueTotal;
      const leagueCompleted = matches.filter(m => m.cls === cls && m.matchType === 'league' && m.status === 'completed').length;
      const leagueRemaining = Math.max(0, leagueTotal - leagueCompleted);

      let calculatedTournamentTotal = 0;
      if (activeGroupCount > 0) {
        const advPerGroup = config.advancementCondition === 'top1' ? 1 : 2;
        const advTeams = activeGroupCount * advPerGroup;
        if (advTeams > 1) {
          calculatedTournamentTotal = advTeams - 1;
        }
      }

      const actualTournamentMatches = matches.filter(m => m.cls === cls && m.matchType === 'tournament');
      const tournamentTotal = actualTournamentMatches.length > 0 ? actualTournamentMatches.length : calculatedTournamentTotal;
      const tournamentCompleted = matches.filter(m => m.cls === cls && m.matchType === 'tournament' && m.status === 'completed').length;
      const tournamentRemaining = Math.max(0, tournamentTotal - tournamentCompleted);

      const totalMatches = leagueTotal + tournamentTotal;
      const completedMatches = leagueCompleted + tournamentCompleted;
      const remainingMatches = leagueRemaining + tournamentRemaining;

      totalLeagueMatches += leagueTotal;
      totalLeagueCompleted += leagueCompleted;
      totalLeagueRemaining += leagueRemaining;

      totalTournamentMatches += tournamentTotal;
      totalTournamentCompleted += tournamentCompleted;
      totalTournamentRemaining += tournamentRemaining;

      return {
        cls,
        count,
        leagueTotal,
        leagueCompleted,
        leagueRemaining,
        tournamentTotal,
        tournamentCompleted,
        tournamentRemaining,
        totalMatches,
        completedMatches,
        remainingMatches
      };
    });

    const totalRemainingMatches = totalLeagueRemaining + totalTournamentRemaining;
    const totalCompletedMatches = totalLeagueCompleted + totalTournamentCompleted;
    const totalMatches = totalLeagueMatches + totalTournamentMatches;

    const courts = config.courts || 1;
    const avgDuration = config.avgMatchDuration || 15;
    
    const remainingMinutes = Math.ceil((totalRemainingMatches * avgDuration) / courts);
    const hours = Math.floor(remainingMinutes / 60);
    const minutes = remainingMinutes % 60;

    let endTimeStr = '--:--';
    if (simCurrentTime) {
      const [startH, startM] = simCurrentTime.split(':').map(Number);
      if (!isNaN(startH) && !isNaN(startM)) {
        const endTotalM = startH * 60 + startM + remainingMinutes;
        const endH = Math.floor(endTotalM / 60) % 24;
        const endM = endTotalM % 60;
        endTimeStr = `${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}`;
      }
    }

    return {
      classStats,
      totalEntries,
      totalLeagueMatches,
      totalLeagueCompleted,
      totalLeagueRemaining,
      totalTournamentMatches,
      totalTournamentCompleted,
      totalTournamentRemaining,
      totalMatches,
      totalCompletedMatches,
      totalRemainingMatches,
      remainingMinutes,
      hours,
      minutes,
      endTimeStr
    };
  };

  const simResult = calculateSimulation();

  const filteredReceptionEntries = entries.filter(ent => {
    if (receptionClassFilter !== 'all' && ent.cls !== receptionClassFilter) {
      return false;
    }
    if (receptionSearchQuery.trim() !== '') {
      const query = receptionSearchQuery.toLowerCase();
      const targetText = `${ent.id} ${ent.cls} ${ent.club} ${ent.p1Name} ${ent.p2Name} ${ent.p1Club} ${ent.p2Club}`.toLowerCase();
      if (!targetText.includes(query)) {
        return false;
      }
    }
    return true;
  });

  const getTeamNameWithClub = (teamId) => {
    const ent = entries.find(e => String(e.id) === String(teamId));
    if (!ent) return '未定';
    const clubStr = ent.club ? ` (${ent.club})` : '';
    return `${ent.p1Name}・${ent.p2Name}${clubStr}`;
  };

  function createBracketSlot(cls, pos, isEditable) {
    const slotInfo = getTournamentSlotInfo(cls, pos);
    const team = slotInfo.team;

    if (slotInfo.isBye) {
      return (
        <div key={`slot-${pos}`} className="border-2 border-gray-200 bg-gray-100 p-2 rounded w-44 h-14 flex flex-col items-center justify-center relative opacity-70">
           <div className="text-[10px] text-gray-400 absolute top-1 left-2 font-mono">枠{pos}</div>
           <div className="font-bold text-xs text-gray-400 text-center mt-1 px-1">シード (不戦勝)</div>
        </div>
      );
    }

    if (isEditable) {
      return (
        <div key={`slot-${pos}`} className={`border-2 ${team ? 'border-orange-500 bg-orange-50' : 'border-dashed border-gray-400 bg-white'} p-2 rounded w-44 h-16 flex flex-col items-center justify-center cursor-pointer relative shadow-sm z-10`} onDragOver={handleDragOver} onDrop={(e) => handleTournamentDrop(e, pos)} draggable={!!team} onDragStart={(e) => team && handleDragStart(e, team.id)}>
           <div className="text-[10px] text-gray-500 absolute top-1 left-2 font-mono">枠{pos}</div>
           <div className="font-bold text-xs truncate w-full text-center mt-2 px-1">{team ? getTeamNameWithClub(team.id) : <span className="text-gray-400 font-normal text-xs">{slotInfo.label || 'ドロップ'}</span>}</div>
        </div>
      );
    }
    return (
      <div key={`slot-${pos}`} className={`border-2 ${team ? 'border-[#2c5f4e] bg-white' : 'border-dashed border-gray-300 bg-gray-50'} p-2 rounded w-44 h-14 flex flex-col items-center justify-center relative shadow-sm z-10`}>
         <div className="text-[10px] text-gray-500 absolute top-1 left-2 font-mono">枠{pos}</div>
         <div className="font-bold text-xs truncate w-full text-center mt-1 px-1">
            {team ? getTeamNameWithClub(team.id) : <span className="text-gray-400 font-normal text-xs">{slotInfo.label}</span>}
         </div>
      </div>
    );
  }

  function renderTournamentTree(cls, isEditable) {
    return (
      <div className="p-4 overflow-x-auto">
        <div className="flex min-w-[900px] font-sans items-center">
          <div className="flex flex-col justify-around h-[560px]">
            <div className="flex flex-col gap-2">{createBracketSlot(cls, 1, isEditable)}{createBracketSlot(cls, 2, isEditable)}</div>
            <div className="flex flex-col gap-2">{createBracketSlot(cls, 3, isEditable)}{createBracketSlot(cls, 4, isEditable)}</div>
            <div className="flex flex-col gap-2">{createBracketSlot(cls, 5, isEditable)}{createBracketSlot(cls, 6, isEditable)}</div>
            <div className="flex flex-col gap-2">{createBracketSlot(cls, 7, isEditable)}{createBracketSlot(cls, 8, isEditable)}</div>
          </div>
          <div className="flex flex-col justify-around h-[560px] w-6 -ml-1 relative z-0">
             <div className="h-[74px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
             <div className="h-[74px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
             <div className="h-[74px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
             <div className="h-[74px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
          </div>
          <div className="flex flex-col justify-around h-[560px] w-6">
             <div className="border-b-2 border-gray-400 w-full"></div><div className="border-b-2 border-gray-400 w-full"></div><div className="border-b-2 border-gray-400 w-full"></div><div className="border-b-2 border-gray-400 w-full"></div>
          </div>
          <div className="flex flex-col justify-around h-[560px] relative z-10">
            <div className="w-28 h-12 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-xs text-gray-500">準決勝進出</div>
            <div className="w-28 h-12 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-xs text-gray-500">準決勝進出</div>
            <div className="w-28 h-12 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-xs text-gray-500">準決勝進出</div>
            <div className="w-28 h-12 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-xs text-gray-500">準決勝進出</div>
          </div>
          <div className="flex flex-col justify-around h-[560px] w-6 -ml-1 py-[35px] relative z-0">
             <div className="h-[140px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
             <div className="h-[140px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
          </div>
          <div className="flex flex-col justify-around h-[560px] w-6">
             <div className="border-b-2 border-gray-400 w-full"></div><div className="border-b-2 border-gray-400 w-full"></div>
          </div>
          <div className="flex flex-col justify-around h-[560px] relative z-10">
            <div className="w-28 h-12 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-xs text-gray-500">決勝進出</div>
            <div className="w-28 h-12 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center text-xs text-gray-500">決勝進出</div>
          </div>
          <div className="flex flex-col justify-around h-[560px] w-6 -ml-1 py-[105px] relative z-0">
             <div className="h-[280px] border-r-2 border-y-2 border-gray-400 rounded-r-lg"></div>
          </div>
          <div className="flex flex-col justify-around h-[560px] w-6">
             <div className="border-b-2 border-gray-400 w-full"></div>
          </div>
          <div className="flex flex-col justify-around h-[560px] relative z-10">
             <div className="w-32 h-16 bg-yellow-50 border-2 border-yellow-400 rounded-xl shadow-md flex flex-col items-center justify-center text-yellow-800 font-bold">
               <IconTrophy /> 優勝
             </div>
          </div>
        </div>
      </div>
    );
  }

  const getBusyTeamIds = () => {
    const busyIds = new Set();
    matches.forEach(m => {
      if (m.courtNumber !== null && (m.status === 'calling' || m.status === 'recepted' || m.status === 'in_progress')) {
        if (m.team1Id) busyIds.add(String(m.team1Id));
        if (m.team2Id) busyIds.add(String(m.team2Id));
      }
    });
    return busyIds;
  };

  const getSortedWaitingMatches = () => {
    const busyIds = getBusyTeamIds();
    const waitingMatches = matches.filter(m => m.status === 'waiting');

    return [...waitingMatches].sort((a, b) => {
      const aBusy = busyIds.has(String(a.team1Id)) || busyIds.has(String(a.team2Id));
      const bBusy = busyIds.has(String(b.team1Id)) || busyIds.has(String(b.team2Id));

      if (!aBusy && bBusy) return -1;
      if (aBusy && !bBusy) return 1;
      return a.matchOrder - b.matchOrder;
    });
  };

  const viewHome = (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 text-center border border-blue-200">
         <h3 className="text-xl font-bold mb-2 text-blue-900">当日の進行状況・対戦表はこちら</h3>
         <button onClick={() => setCurrentTab('dashboard')} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow flex items-center justify-center gap-2 mx-auto"><IconSmartphone /> 進行状況ダッシュボードを開く</button>
      </div>

      <div className="bg-[#2c5f4e] text-white rounded-2xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-wider relative z-10">{config.title}</h1>
        <p className="text-xl md:text-2xl font-light mb-8 relative z-10">{config.date}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
          <button onClick={() => {setEditMode(false); setCurrentTab('entry');}} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-2"><IconUser /> 大会にエントリー</button>
          <button onClick={() => setCurrentTab('editLogin')} className="bg-white text-[#2c5f4e] hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg border-2 border-[#2c5f4e] flex items-center justify-center gap-2"><IconSettings /> 登録内容の修正・取消</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 space-y-6">
        <div>
           <h2 className="text-2xl font-bold border-b-2 border-[#2c5f4e] pb-2 mb-6 text-[#2c5f4e] flex items-center gap-2"><IconCheckCircle /> 大会要項</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
             <div><strong className="block text-sm text-gray-500">日程</strong>{config.date}</div>
             <div><strong className="block text-sm text-gray-500">タイムスケジュール</strong>開館:{config.timeOpen} / 受付:{config.timeReception}〜 / 試合開始:{config.timeStart}</div>
             <div className="md:col-span-2"><strong className="block text-sm text-gray-500">会場</strong>{config.venue}</div>
             <div className="md:col-span-2"><strong className="block text-sm text-gray-500">参加費（1組あたり）</strong>一般: {config.fees['一般']}円 / 高校生まで: {config.fees['高校生まで']}円</div>
             <div className="md:col-span-2"><strong className="block text-sm text-gray-500">申込締切</strong><span className="text-red-500 font-bold">{config.deadline}</span></div>
             <div className="md:col-span-2 bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm mt-2"><strong className="block mb-1">注意事項</strong>{config.notes}</div>
           </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
           <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-200 pb-2">
              🏸 審判割り当て ＆ スコア提出の流れ
           </h3>
           <p className="text-xs text-slate-600 font-bold">
              ※原則として、審判は同一クラス内の直前試合のペアが担当します。
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
              <div className="bg-white p-3 rounded-lg border shadow-2xs space-y-1">
                 <div className="font-bold text-emerald-800 text-sm">1. 審判の分担</div>
                 <p className="leading-relaxed">直前試合の<strong>【勝者組】が主審・副審</strong>を務め、<strong>【敗者組】が線審</strong>を務めます。</p>
                 <p className="text-[11px] text-gray-500 pt-0.5">※予選初戦は、同グループの待機ペア（第3試合を行う組）が審判を担当します。</p>
              </div>
              <div className="bg-white p-3 rounded-lg border shadow-2xs space-y-1">
                 <div className="font-bold text-emerald-800 text-sm">2. 試合後の受渡</div>
                 <p className="leading-relaxed">試合終了後、主審は結果を記入したスコア用紙を<strong>【勝者ペアの代表者】</strong>に渡します。</p>
              </div>
              <div className="bg-white p-3 rounded-lg border shadow-2xs space-y-1">
                 <div className="font-bold text-emerald-800 text-sm">3. 事務局への提出</div>
                 <p className="leading-relaxed">勝者・敗者両ペアの代表者が一緒にスコア用紙を持って事務局本部へ提出します。</p>
              </div>
              <div className="bg-white p-3 rounded-lg border shadow-2xs space-y-1">
                 <div className="font-bold text-emerald-800 text-sm">4. 次試合の指示・他クラス応援</div>
                 <p className="leading-relaxed">事務局は勝者ペアに次試合のスコア用紙を渡し、敗者ペアには線審に入るよう案内します。</p>
                 <p className="text-[11px] text-gray-500 pt-0.5">※組数が少なく同一クラス内から審判が出せない場合は、他クラスの空きペアに応援を依頼します。</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  const viewDashboard = (
    <div className="max-w-6xl mx-auto animate-fade-in space-y-6">
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold flex items-center gap-2"><IconSmartphone /> 進行状況ダッシュボード</h2>
         <button onClick={() => setCurrentTab('home')} className="text-sm text-gray-500 hover:text-gray-800 underline">ホームへ戻る</button>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-lg text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
         <div>
            <span className="font-bold bg-emerald-700 text-white px-2 py-0.5 rounded text-[10px] mr-2">審判ルール</span>
            <strong>直前試合：勝者組 ➔ 主審・副審 ／ 敗者組 ➔ 線審</strong>
            <span className="text-[11px] text-emerald-800 ml-2">（※予選初戦はグループ待機組、必要に応じて他クラス応援依頼）</span>
         </div>
         <span className="text-[11px] text-emerald-700">※両ペアでスコア用紙を持って事務局へ提出</span>
      </div>

      <div className="flex border-b border-gray-300">
         <button onClick={() => setDashTab('matches')} className={`px-4 py-3 font-bold ${dashTab === 'matches' ? 'text-[#2c5f4e] border-b-4 border-[#2c5f4e]' : 'text-gray-400'}`}>コート進行</button>
         <button onClick={() => setDashTab('league')} className={`px-4 py-3 font-bold ${dashTab === 'league' ? 'text-[#2c5f4e] border-b-4 border-[#2c5f4e]' : 'text-gray-400'}`}>予選リーグ表</button>
         <button onClick={() => setDashTab('tournament')} className={`px-4 py-3 font-bold ${dashTab === 'tournament' ? 'text-[#2c5f4e] border-b-4 border-[#2c5f4e]' : 'text-gray-400'}`}>決勝トーナメント</button>
      </div>

      {dashTab !== 'matches' && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {config.classes.map(cls => (
            <button key={cls} onClick={() => setSelectedClass(cls)} className={`px-6 py-2 rounded-full font-bold whitespace-nowrap shadow-sm ${selectedClass === cls ? 'bg-[#2c5f4e] text-white' : 'bg-white text-gray-600'}`}>{cls}</button>
          ))}
        </div>
      )}

      <div className="min-h-[400px]">
        {dashTab === 'matches' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {Array.from({length: config.courts}).map((_, i) => {
                const courtNum = i + 1;
                const activeMatch = getActiveMatchForCourt(courtNum);
                
                let statusLabel = '空き';
                let badgeClass = 'bg-gray-100 text-gray-500';
                if (activeMatch) {
                  if (activeMatch.status === 'calling') { statusLabel = '要コール'; badgeClass = 'bg-yellow-100 text-yellow-800 border border-yellow-300'; }
                  else if (activeMatch.status === 'recepted' || activeMatch.status === 'in_progress') { statusLabel = '試合受付'; badgeClass = 'bg-blue-100 text-blue-800 border border-blue-300'; }
                  else if (activeMatch.status === 'completed') { statusLabel = 'スコア済'; badgeClass = 'bg-green-100 text-green-700 border border-green-300'; }
                }

                return (
                  <div key={`court-${i}`} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                     <div className="bg-gray-100 px-3 py-2 flex justify-between items-center border-b">
                        <span className="font-bold text-gray-600 text-sm">第 {courtNum} コート</span>

                        {activeMatch && (() => {
                           const ref = getRefereeForMatch(activeMatch);
                           return (
                              <div className="relative group inline-block">
                                 <span className="text-[10px] bg-[#2c5f4e] text-white px-2 py-0.5 rounded cursor-pointer font-bold shadow-xs hover:bg-[#1f4236] transition-colors">
                                    審判 ℹ️
                                 </span>
                                 <div 
                                   className="absolute right-0 hidden group-hover:block w-60 bg-slate-800 text-white text-[11px] p-2.5 rounded-lg shadow-2xl z-50 pointer-events-none transition-all"
                                   style={{ bottom: '100%', top: 'auto', marginBottom: '8px' }}
                                 >
                                    <div className="font-bold border-b border-slate-600 pb-1 mb-1.5 text-emerald-400 flex justify-between">
                                       <span>審判割り当て</span>
                                       <span className="text-[9px] text-slate-300">({activeMatch.cls})</span>
                                    </div>
                                    <div className="truncate my-0.5"><span className="text-gray-400 font-bold">主・副審:</span> {ref.main}</div>
                                    <div className="truncate my-0.5"><span className="text-gray-400 font-bold">線審:</span> {ref.line}</div>
                                 </div>
                              </div>
                           );
                        })()}
                     </div>

                     <div className="p-4 flex flex-col min-h-32 justify-between text-center">
                       {activeMatch ? (
                          <div>
                             <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 inline-block ${badgeClass}`}>
                                ({activeMatch.cls}) グループ{activeMatch.group}・{statusLabel}
                             </span>
                             <div className="text-xs font-bold truncate w-full">{getTeamNameWithClub(activeMatch.team1Id)}</div>
                             <div className="text-xs text-gray-400 my-1">
                                {activeMatch.status === 'completed' ? `${activeMatch.team1Score} - ${activeMatch.team2Score}` : 'vs'}
                             </div>
                             <div className="text-xs font-bold truncate w-full">{getTeamNameWithClub(activeMatch.team2Id)}</div>
                          </div>
                       ) : (<span className="text-gray-300 font-bold text-lg my-auto">空き</span>)}
                     </div>
                  </div>
                );
             })}
          </div>
        )}
        {dashTab === 'league' && (
          <div>
             <h3 className="text-xl font-bold mb-4">{selectedClass} - 予選リーグ</h3>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(group => {
                 const groupEntries = entries.filter(e => e.cls === selectedClass && e.group === group);
                 if (groupEntries.length === 0) return null;
                 
                 const groupMatches = matches.filter(m => m.cls === selectedClass && m.group === group && m.status === 'completed');

                 return (
                   <div key={`group-${group}`} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
                      <h4 className="font-bold text-lg mb-3 border-l-4 border-[#2c5f4e] pl-2">グループ {group}</h4>
                      <table className="w-full text-sm text-center border-collapse">
                         <thead>
                            <tr>
                               <th className="border p-2 bg-gray-50 text-left min-w-[140px]">ペア (所属)</th>
                               {groupEntries.map((_, i) => <th key={`th-${i}`} className="border p-2 bg-gray-50">{i+1}</th>)}
                               <th className="border p-2 bg-blue-50">勝敗</th>
                            </tr>
                         </thead>
                         <tbody>
                            {groupEntries.map((ent, i) => {
                               let wins = 0;
                               let losses = 0;

                               return (
                                 <tr key={ent.id}>
                                    <td className="border p-2 text-left font-bold truncate max-w-[180px]">
                                       <span className="text-gray-400 text-xs mr-1">{i+1}</span>{getTeamNameWithClub(ent.id)}
                                    </td>
                                    {groupEntries.map((opp, j) => {
                                       if (i === j) return <td key={`td-${j}`} className="border p-2 bg-gray-100 font-bold">-</td>;
                                       const match = groupMatches.find(m => (m.team1Id === ent.id && m.team2Id === opp.id) || (m.team1Id === opp.id && m.team2Id === ent.id));
                                       
                                       if (!match) return <td key={`td-${j}`} className="border p-2 text-gray-300">-</td>;

                                       let scoreText = '';
                                       if (match.team1Id === ent.id) {
                                         scoreText = `${match.team1Score} - ${match.team2Score}`;
                                         if (match.team1Score > match.team2Score) wins++; else if (match.team1Score < match.team2Score) losses++;
                                       } else {
                                         scoreText = `${match.team2Score} - ${match.team1Score}`;
                                         if (match.team2Score > match.team1Score) wins++; else if (match.team2Score < match.team1Score) losses++;
                                       }

                                       return <td key={`td-${j}`} className="border p-2 text-xs font-bold">{scoreText}</td>;
                                    })}
                                    <td className="border p-2 font-bold text-blue-700">{wins}勝{losses}敗</td>
                                 </tr>
                               );
                            })}
                         </tbody>
                      </table>
                   </div>
                 );
               })}
             </div>
          </div>
        )}
        {dashTab === 'tournament' && (
          <div>
            <h3 className="text-xl font-bold mb-4">{selectedClass} - 決勝トーナメント</h3>
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
               {renderTournamentTree(selectedClass, false)}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const viewEntryForm = (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md animate-fade-in border-t-4 border-[#2c5f4e]">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
         <h2 className="text-2xl font-bold flex items-center gap-2">{editMode ? '登録内容の修正・取消' : '大会エントリー'}</h2>
         <button onClick={() => {setCurrentTab('home'); setEditMode(false);}} className="text-sm text-gray-500 hover:text-gray-800">キャンセル</button>
      </div>
      <form onSubmit={editMode ? handleEditSubmit : handleEntrySubmit} className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">出場クラス <span className="text-red-500">*</span></label>
            <select className="w-full p-3 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={entryForm.cls || (config.classes.length > 0 ? config.classes[0] : '')} onChange={(e) => setEntryForm({...entryForm, cls: e.target.value})} required>
              {config.classes.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">所属クラブ名 (学校名) <span className="text-red-500">*</span></label>
            <input type="text" placeholder="例: 紀北バドミントンクラブ / ○○高校" className="w-full p-3 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={entryForm.club} onChange={(e) => setEntryForm({...entryForm, club: e.target.value})} required />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">参加区分 (1組あたりの料金) <span className="text-red-500">*</span></label>
            <div className="flex flex-wrap gap-6 p-3 border rounded bg-white">
              {Object.keys(config.fees).map(feeType => (
                <label key={`fee-${feeType}`} className="flex items-center gap-2 cursor-pointer font-bold text-gray-800">
                  <input 
                    type="radio" 
                    name="feeCategory" 
                    value={feeType} 
                    checked={(entryForm.feeCategory || entryForm.p1Fee || '一般') === feeType} 
                    onChange={e => setEntryForm({...entryForm, feeCategory: e.target.value})} 
                  />
                  <span>{feeType} ({config.fees[feeType].toLocaleString()}円/組)</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">※ペアのどちらか1人でも一般が含まれる場合は「一般」を選択してください。</p>
          </div>
        </div>

        <div>
           <label className="block text-sm font-bold text-gray-700 mb-1">代表者連絡先（携帯番号） <span className="text-red-500">*</span></label>
           <input type="tel" placeholder="090-XXXX-XXXX" className="w-full p-2 border rounded" required value={entryForm.contact} onChange={e => setEntryForm({...entryForm, contact: e.target.value})} />
        </div>
        <div className="grid grid-cols-2 gap-4 border p-4 rounded bg-blue-50">
           <div className="col-span-2 font-bold text-blue-800">選手 1</div>
           <input type="text" placeholder="氏名" className="p-2 border rounded" required value={entryForm.p1Name} onChange={e => setEntryForm({...entryForm, p1Name: e.target.value})} />
           <input type="text" placeholder="所属" className="p-2 border rounded" required value={entryForm.p1Club} onChange={e => setEntryForm({...entryForm, p1Club: e.target.value})} />
        </div>
        <div className="grid grid-cols-2 gap-4 border p-4 rounded bg-green-50">
           <div className="col-span-2 font-bold text-green-800">選手 2</div>
           <input type="text" placeholder="氏名" className="p-2 border rounded" required value={entryForm.p2Name} onChange={e => setEntryForm({...entryForm, p2Name: e.target.value})} />
           <input type="text" placeholder="所属" className="p-2 border rounded" required value={entryForm.p2Club} onChange={e => setEntryForm({...entryForm, p2Club: e.target.value})} />
        </div>
        
        <div className="flex flex-col gap-3">
          <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg shadow-lg text-lg hover:bg-orange-600 transition-colors">
            {editMode ? '変更を保存する' : 'エントリーを確定する'}
          </button>
          {editMode && (
            <button 
              type="button" 
              onClick={() => handleDeleteSelfEntry(currentEditId, entryForm.p1Name)}
              className="w-full bg-red-100 hover:bg-red-200 text-red-700 font-bold py-3 rounded-lg border border-red-300 transition-colors"
            >
              このエントリーを取り消す（削除）
            </button>
          )}
        </div>
      </form>
    </div>
  );

  const viewEditLogin = (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500">
      <h2 className="text-2xl font-bold mb-6 text-center">登録内容の修正・取消</h2>
      <form onSubmit={handleEditLogin} className="space-y-4">
        <input type="text" placeholder="受付ID (0001)" className="w-full p-3 border rounded bg-gray-50" required value={editLogin.id} onChange={e => setEditLogin({...editLogin, id: e.target.value})} />
        <input 
          type="password" 
          inputMode="numeric"
          maxLength={4}
          placeholder="パスワード（数字4桁）" 
          className="w-full p-3 border rounded bg-gray-50" 
          required 
          value={editLogin.password} 
          onChange={e => setEditLogin({...editLogin, password: e.target.value.replace(/\D/g, '')})} 
        />
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow mt-4">ログイン</button>
      </form>
    </div>
  );

  const viewAdminLogin = (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border-t-4 border-gray-800">
      <h2 className="text-xl font-bold mb-6 text-center">管理者ログイン</h2>
      <form onSubmit={handleAdminLogin} className="space-y-4">
        <input 
          type="password" 
          placeholder="パスワードを入力" 
          className="w-full p-3 border rounded" 
          required 
          value={adminPassword} 
          onChange={e => setAdminPassword(e.target.value)} 
        />
        <button type="submit" className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg">ログイン</button>
      </form>
    </div>
  );

  const viewAdmin = (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md border overflow-hidden">
      <div className="flex bg-gray-800 text-white p-4 justify-between">
         <h2 className="text-xl font-bold flex items-center gap-2"><IconSettings /> 管理システム</h2>
         <button onClick={() => setIsAdminLoggedIn(false)} className="text-sm bg-gray-700 px-3 py-1 rounded">ログアウト</button>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 bg-gray-50 border-r p-4 flex flex-col gap-2">
           <button onClick={() => setAdminTab('settings')} className={`p-2 text-left rounded font-bold ${adminTab === 'settings' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>マスタ設定</button>
           <button onClick={() => setAdminTab('entries')} className={`p-2 text-left rounded font-bold ${adminTab === 'entries' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>エントリー管理</button>
           <button onClick={() => setAdminTab('reception')} className={`p-2 text-left rounded font-bold ${adminTab === 'reception' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>受付処理</button>
           <button onClick={() => setAdminTab('draw')} className={`p-2 text-left rounded font-bold ${adminTab === 'draw' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>ドロー編成</button>
           <button onClick={() => setAdminTab('simulation')} className={`p-2 text-left rounded font-bold ${adminTab === 'simulation' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>シミュレーション</button>
           <button onClick={() => setAdminTab('matches')} className={`p-2 text-left rounded font-bold ${adminTab === 'matches' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>コート進行・スコア</button>
           <button onClick={() => setAdminTab('data')} className={`p-2 text-left rounded font-bold ${adminTab === 'data' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>データ管理</button>
        </div>
        <div className="flex-1 p-6 bg-gray-50/50 min-w-0">
          
          {adminTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b pb-2 flex items-center gap-2"><IconSettings /> 大会マスタ設定</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2"><label className="block font-bold text-sm mb-1 text-gray-700">大会名</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.title} onChange={e=>setConfig({...config, title: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">開催日</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.date} onChange={e=>setConfig({...config, date: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">会場</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.venue} onChange={e=>setConfig({...config, venue: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">申込締切</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.deadline} onChange={e=>setConfig({...config, deadline: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">コート数（面）</label><input type="number" min="1" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.courts} onChange={e=>setConfig({...config, courts: parseInt(e.target.value) || 1})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">開館時間</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.timeOpen} onChange={e=>setConfig({...config, timeOpen: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">受付開始</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.timeReception} onChange={e=>setConfig({...config, timeReception: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">試合開始</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.timeStart} onChange={e=>setConfig({...config, timeStart: e.target.value})} /></div>
                
                <div className="md:col-span-2 border-t pt-4">
                  <h4 className="font-bold text-md text-[#2c5f4e] mb-3">トーナメント・シミュレーション設定</h4>
                </div>

                <div>
                  <label className="block font-bold text-sm mb-1 text-gray-700">決勝トーナメント進出条件</label>
                  <select className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.advancementCondition} onChange={e=>setConfig({...config, advancementCondition: e.target.value})}>
                     <option value="top1">各グループ 1位のみ進出</option>
                     <option value="top2">各グループ 2位まで進出（1位・2位）</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-sm mb-1 text-gray-700">1試合の平均所要時間 (分)</label>
                  <input type="number" min="5" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.avgMatchDuration} onChange={e=>setConfig({...config, avgMatchDuration: parseInt(e.target.value) || 15})} placeholder="例: 15" />
                </div>

                <div className="md:col-span-2"><label className="block font-bold text-sm mb-1 text-gray-700">出場クラス（カンマ `,` 区切り）</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.classes.join(',')} onChange={e=>setConfig({...config, classes: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})} placeholder="例: 1部,2部,3部" /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">参加費: 一般 (円/組)</label><input type="number" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.fees['一般']} onChange={e=>setConfig({...config, fees: {...config.fees, '一般': parseInt(e.target.value) || 0}})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">参加費: 高校生まで (円/組)</label><input type="number" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.fees['高校生まで']} onChange={e=>setConfig({...config, fees: {...config.fees, '高校生まで': parseInt(e.target.value) || 0}})} /></div>
                <div className="md:col-span-2"><label className="block font-bold text-sm mb-1 text-gray-700">注意事項</label><textarea className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none h-24" value={config.notes} onChange={e=>setConfig({...config, notes: e.target.value})} /></div>
              </div>

              <div className="border-t pt-4">
                 <button onClick={handleSaveSettings} className="w-full md:w-auto px-8 py-3 bg-[#2c5f4e] hover:bg-[#1f4236] text-white font-bold rounded shadow flex items-center justify-center gap-2">
                    <IconCheckCircle /> 設定を保存して公開する
                 </button>
              </div>
            </div>
          )}
          
          {adminTab === 'entries' && (
            <div>
              <h3 className="text-xl font-bold mb-4">エントリー管理</h3>
              <div className="overflow-x-auto bg-white rounded border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">パスワード</th>
                      <th className="p-3">所属クラブ</th>
                      <th className="p-3">ペア</th>
                      <th className="p-3">区分</th>
                      <th className="p-3">連絡先</th>
                      <th className="p-3">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map(ent => (
                      <tr key={ent.id} className="border-b">
                        <td className="p-3 font-mono font-bold text-[#2c5f4e]">{ent.id}</td>
                        <td className="p-3 font-mono font-bold text-orange-600">{ent.password}</td>
                        <td className="p-3">{ent.club || '-'}</td>
                        <td className="p-3 font-bold">({ent.cls}) {getTeamNameWithClub(ent.id)}</td>
                        <td className="p-3 font-bold text-xs">{ent.feeCategory || ent.p1Fee || '一般'}</td>
                        <td className="p-3">{ent.contact}</td>
                        <td className="p-3 flex gap-2">
                           <button onClick={() => { setEntryForm({...ent, feeCategory: ent.feeCategory || ent.p1Fee || '一般'}); setCurrentEditId(ent.id); setEditMode(true); setCurrentTab('entry'); }} className="bg-blue-500 text-white px-3 py-1 rounded">編集</button>
                           <button onClick={() => handleDeleteEntry(ent.id, ent.p1Name)} className="bg-red-500 text-white px-3 py-1 rounded">削除</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {adminTab === 'reception' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                 <h3 className="text-xl font-bold">当日受付処理</h3>
                 
                 <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 px-4 py-2 rounded-xl font-bold text-sm shadow-sm flex items-center gap-3">
                    <span className="text-xs text-gray-600">受付済: <strong>{entries.filter(e => e.checkedIn).length} / {entries.length} 組</strong></span>
                    <span className="border-l border-emerald-300 h-4"></span>
                    <span>受付済参加費計: <strong className="text-lg text-emerald-700 font-mono ml-1">¥{entries.filter(e => e.checkedIn).reduce((sum, e) => sum + getPairFee(e), 0).toLocaleString()}</strong></span>
                 </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4 flex flex-col md:flex-row gap-3 items-center justify-between border">
                 <div className="flex items-center gap-2 w-full md:w-auto">
                    <span className="text-xs font-bold text-gray-600 whitespace-nowrap">クラス絞り込み:</span>
                    <select 
                      className="p-2 border rounded bg-white font-bold text-sm w-full md:w-auto focus:ring-2 focus:ring-[#2c5f4e] outline-none"
                      value={receptionClassFilter}
                      onChange={e => setReceptionClassFilter(e.target.value)}
                    >
                       <option value="all">すべてのクラス ({entries.length}件)</option>
                       {config.classes.map(cls => (
                          <option key={`rec-cls-${cls}`} value={cls}>
                             {cls} ({entries.filter(e => e.cls === cls).length}件)
                          </option>
                       ))}
                    </select>
                 </div>

                 <div className="relative w-full md:w-72">
                    <input 
                      type="text" 
                      placeholder="ID・クラス・クラブ・ペア名で検索..." 
                      className="w-full p-2 pl-9 border rounded bg-white text-sm focus:ring-2 focus:ring-[#2c5f4e] outline-none"
                      value={receptionSearchQuery}
                      onChange={e => setReceptionSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-2.5 top-2.5 text-gray-400">
                       <IconSearch />
                    </div>
                    {receptionSearchQuery && (
                       <button 
                         onClick={() => setReceptionSearchQuery('')}
                         className="absolute right-2.5 top-2 text-xs bg-gray-200 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center font-bold"
                       >
                         ×
                       </button>
                    )}
                 </div>
              </div>

              <div className="bg-white rounded border overflow-hidden shadow-sm">
                 <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 border-b">
                       <tr>
                          <th className="p-3 w-28 text-center">受付状態</th>
                          <th className="p-3 w-20 font-bold">ID</th>
                          <th className="p-3 w-24 font-bold">クラス</th>
                          <th className="p-3 font-bold">所属クラブ (学校)</th>
                          <th className="p-3 font-bold">ペア</th>
                          <th className="p-3 font-bold text-right w-32">参加費</th>
                       </tr>
                    </thead>
                    <tbody>
                       {filteredReceptionEntries.length > 0 ? (
                          filteredReceptionEntries.map(ent => {
                             const pairFee = getPairFee(ent);
                             return (
                               <tr 
                                 key={ent.id} 
                                 className="border-t hover:bg-emerald-50/50 cursor-pointer transition-colors" 
                                 onClick={() => toggleCheckIn(ent.id, ent.checkedIn)}
                               >
                                  <td className="p-3 text-center">
                                     {ent.checkedIn ? (
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-xs inline-flex items-center gap-1 shadow-sm">
                                           <IconCheckCircle /> 済
                                        </span>
                                     ) : (
                                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-bold text-xs inline-block">
                                           未
                                        </span>
                                     )}
                                  </td>
                                  <td className="p-3 font-mono font-bold text-[#2c5f4e]">{ent.id}</td>
                                  <td className="p-3 font-bold text-gray-700">{ent.cls}</td>
                                  <td className="p-3 text-gray-800 font-medium">{ent.club || '-'}</td>
                                  <td className="p-3 font-bold text-[#2c5f4e]">
                                     {ent.p1Name} / {ent.p2Name}
                                  </td>
                                  <td className="p-3 text-right font-mono font-bold text-gray-700">
                                     ¥{pairFee.toLocaleString()}
                                  </td>
                               </tr>
                             );
                          })
                       ) : (
                          <tr>
                             <td colSpan="6" className="p-8 text-center text-gray-400">
                                該当するエントリーが見つかりません。
                             </td>
                          </tr>
                       )}
                    </tbody>
                 </table>
              </div>
            </div>
          )}

          {adminTab === 'draw' && (
            <div className="w-full overflow-hidden">
              <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2.5 rounded-lg mb-4 text-xs font-bold flex items-center justify-between">
                 <span>⚠️ ドロー編成は「受付処理」で受付済（済）になった組のみが表示・割り当て対象となります。</span>
                 <span className="bg-amber-200 text-amber-800 px-2 py-0.5 rounded font-mono">
                    {drawClass} 受付済: {entries.filter(e => e.cls === drawClass && e.checkedIn).length} / {entries.filter(e => e.cls === drawClass).length} 組
                 </span>
              </div>

              <div className="flex gap-4 mb-4">
                 <button onClick={() => setDrawType('league')} className={`px-4 py-2 rounded font-bold ${drawType === 'league' ? 'bg-white shadow text-[#2c5f4e]' : 'bg-gray-200'}`}>予選リーグ</button>
                 <button onClick={() => setDrawType('tournament')} className={`px-4 py-2 rounded font-bold ${drawType === 'tournament' ? 'bg-white shadow text-orange-600' : 'bg-gray-200'}`}>決勝トーナメント</button>
              </div>
              <div className="flex flex-wrap gap-3 items-center mb-6 bg-gray-50 p-3 rounded border">
                 <select className="border p-2 rounded font-bold" value={drawClass} onChange={e => setDrawClass(e.target.value)}>
                    {config.classes.map(c => <option key={c} value={c}>{c}</option>)}
                 </select>
                 
                 {drawType === 'league' ? (
                   <>
                     <button onClick={handleAutoDraw} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold shadow-sm">
                        受付済の組を自動ランダム振り分け
                     </button>
                     <button 
                       onClick={async () => {
                         const count = await generateLeagueMatches(drawClass);
                         if (count > 0) {
                           setDialog({ title: "対戦カード生成完了", message: `全クラスのグループ配置に基づき、対戦カード（全${count}試合）を更新・生成しました！`, onClose: () => setDialog(null) });
                         } else {
                           setDialog({ title: "対戦カードクリア", message: `グループに2組以上配置されている組がないため、対戦カードをクリア（0試合）にしました。各グループに2組以上配置してください。`, onClose: () => setDialog(null) });
                         }
                       }} 
                       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold shadow-sm flex items-center gap-1"
                     >
                        <IconRefresh /> 手動編成から対戦カード生成
                     </button>
                   </>
                 ) : (
                   <button onClick={handleAutoDrawTournament} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold shadow-sm">
                      予選順位からトーナメント位置を自動初期反映
                   </button>
                 )}
              </div>

              {drawType === 'league' ? (
                <div className="flex gap-4 overflow-x-auto pb-6 w-full cursor-grab active:cursor-grabbing">
                   {['未割り当て', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(groupName => {
                      const groupTeams = entries.filter(e => e.cls === drawClass && e.checkedIn && e.group === groupName);
                      if (groupName !== '未割り当て' && groupTeams.length === 0 && !['A', 'B', 'C'].includes(groupName)) {
                        return null;
                      }
                      return (
                        <div key={`admin-group-${groupName}`} className="min-w-[260px] max-w-[260px] bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300 flex-shrink-0" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, groupName)}>
                           <h4 className="font-bold mb-3 border-b-2 pb-2 flex justify-between items-center">
                              <span>{groupName === '未割り当て' ? '未割り当て (受付済)' : `グループ ${groupName}`}</span>
                              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full font-normal text-gray-600">{groupTeams.length}組</span>
                           </h4>
                           <div className="space-y-2 max-h-[450px] overflow-y-auto pr-1">
                              {groupTeams.map(ent => (
                                 <div key={ent.id} draggable onDragStart={(e) => handleDragStart(e, ent.id)} className="bg-white p-3 rounded shadow-sm border cursor-move text-sm font-bold hover:border-[#2c5f4e] transition-colors">
                                    <div className="text-xs text-gray-400 font-mono mb-1">{ent.id}</div>
                                    <div>{getTeamNameWithClub(ent.id)}</div>
                                 </div>
                              ))}
                              {groupTeams.length === 0 && (
                                <div className="text-xs text-gray-400 text-center py-8">ここにドロップ</div>
                              )}
                           </div>
                        </div>
                      );
                   })}
                </div>
              ) : (
                <div className="flex gap-6">
                   <div className="w-1/3 bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300" onDragOver={handleDragOver} onDrop={handleRemoveTournamentPosition}>
                      <h4 className="font-bold mb-3 border-b-2 pb-2">未配置 / 予選参加組 (受付済)</h4>
                      <div className="space-y-2 max-h-[500px] overflow-y-auto">
                         {entries.filter(e => e.cls === drawClass && e.checkedIn && !e.tournamentPosition).map(ent => (
                            <div key={ent.id} draggable onDragStart={(e) => handleDragStart(e, ent.id)} className="bg-white p-3 rounded shadow-sm border cursor-move text-sm font-bold hover:border-orange-500">
                               <div className="text-xs text-gray-400 font-mono mb-1">{ent.id}</div>
                               <div>{getTeamNameWithClub(ent.id)}</div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <div className="w-2/3 bg-gray-50 rounded-lg border overflow-x-auto relative p-4">
                      {renderTournamentTree(drawClass, true)}
                   </div>
                </div>
              )}
            </div>
          )}

          {adminTab === 'simulation' && (
            <div className="space-y-6">
               <div className="flex flex-wrap justify-between items-center border-b pb-3 gap-2">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                     <IconClock /> 試合数・終了予定時間 リアルタイムシミュレーション
                  </h3>
                  <div className="flex items-center gap-3 bg-amber-50 border border-amber-300 px-4 py-2 rounded-xl shadow-sm">
                     <span className="text-sm font-bold text-amber-900">基準時間（変更可）:</span>
                     <input 
                       type="time" 
                       className="p-1.5 border-2 border-amber-400 rounded-lg bg-white font-mono font-extrabold text-xl text-amber-900 outline-none focus:ring-2 focus:ring-[#2c5f4e]"
                       value={simCurrentTime}
                       onChange={e => setSimCurrentTime(e.target.value)}
                     />
                     <button
                       type="button"
                       onClick={setSimToNow}
                       className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow-sm transition-colors"
                     >
                       現時刻
                     </button>
                  </div>
               </div>

               <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-700">
                 <div className="overflow-x-auto mb-6">
                    <table className="w-full text-xs text-center border-collapse">
                       <thead>
                          <tr className="bg-slate-700/60 text-slate-200">
                             <th className="p-2.5 text-left">クラス</th>
                             <th className="p-2.5">エントリー組数</th>
                             <th className="p-2.5">予選 (残 / 全)</th>
                             <th className="p-2.5">決勝T (残 / 全)</th>
                             <th className="p-2.5 text-emerald-300">完了試合</th>
                             <th className="p-2.5 text-orange-300 font-bold">残り試合数</th>
                             <th className="p-2.5">総試合数</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-700/50">
                          {simResult.classStats.map(s => (
                             <tr key={s.cls} className="hover:bg-slate-700/30">
                                <td className="p-2.5 text-left font-bold text-emerald-400">{s.cls}</td>
                                <td className="p-2.5">{s.count} 組</td>
                                <td className="p-2.5"><span className="text-orange-300 font-bold">{s.leagueRemaining}</span> / {s.leagueTotal}</td>
                                <td className="p-2.5"><span className="text-orange-300 font-bold">{s.tournamentRemaining}</span> / {s.tournamentTotal}</td>
                                <td className="p-2.5 text-emerald-400 font-mono font-bold">{s.completedMatches} 試合</td>
                                <td className="p-2.5 font-bold text-orange-400 text-sm font-mono">{s.remainingMatches} 試合</td>
                                <td className="p-2.5 text-slate-400 font-mono">{s.totalMatches} 試合</td>
                             </tr>
                          ))}
                          <tr className="bg-slate-800/90 font-bold border-t-2 border-slate-600 text-sm">
                             <td className="p-3 text-left text-white">全体合計</td>
                             <td className="p-3 text-white">{simResult.totalEntries} 組</td>
                             <td className="p-3 text-white"><span className="text-orange-400">{simResult.totalLeagueRemaining}</span> / {simResult.totalLeagueMatches}</td>
                             <td className="p-3 text-white"><span className="text-orange-400">{simResult.totalTournamentRemaining}</span> / {simResult.totalTournamentMatches}</td>
                             <td className="p-3 text-emerald-400 font-mono">{simResult.totalCompletedMatches} 試合</td>
                             <td className="p-3 text-orange-400 text-base font-mono">{simResult.totalRemainingMatches} 試合</td>
                             <td className="p-3 text-slate-300 font-mono">{simResult.totalMatches} 試合</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-800/80 p-5 rounded-xl border border-slate-700">
                    <div className="text-center border-b md:border-b-0 md:border-r border-slate-700 pb-3 md:pb-0">
                       <span className="block text-xs text-slate-400 mb-1">使用コート数</span>
                       <span className="text-2xl font-extrabold text-white">{config.courts} 面</span>
                    </div>
                    <div className="text-center border-b md:border-b-0 md:border-r border-slate-700 pb-3 md:pb-0">
                       <span className="block text-xs text-slate-400 mb-1">残り総所要時間 (1試合{config.avgMatchDuration}分換算)</span>
                       <span className="text-2xl font-extrabold text-emerald-400">約 {simResult.hours}時間 {simResult.minutes}分</span>
                    </div>
                    <div className="text-center">
                       <span className="block text-xs text-slate-400 mb-1">大会予想終了時刻 ({simCurrentTime}時点基準)</span>
                       <span className="text-2xl font-extrabold text-orange-400">{simResult.endTimeStr} 頃</span>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {adminTab === 'matches' && (
            <div>
               <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
                  <h3 className="text-xl font-bold flex items-center gap-2"><IconMatch /> コート進行・ドラッグ＆ドロップ割当</h3>
                  <button 
                    onClick={async () => {
                      const totalGenerated = await generateAllLeagueMatches();
                      setDialog({ title: "対戦カード再生成完了", message: `全クラスのグループ編成に基づき、合計 ${totalGenerated} 試合の対戦カードを更新・再生成しました。`, onClose: () => setDialog(null) });
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded font-bold shadow flex items-center gap-1"
                  >
                     <IconRefresh /> 全対戦カードを再生成
                  </button>
               </div>

               <div className="mb-8">
                  <h4 className="font-bold text-sm text-gray-700 mb-3 border-l-4 border-[#2c5f4e] pl-2">🏸 コート配置状況 (空きコートにカードをドロップ)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                     {Array.from({ length: config.courts }).map((_, i) => {
                        const courtNum = i + 1;
                        const activeMatch = getActiveMatchForCourt(courtNum);
                        
                        let cardBgClass = 'bg-white border-dashed border-gray-300 hover:border-emerald-400';
                        let badgeLabel = '要コール';
                        let badgeBgClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';

                        if (activeMatch) {
                           if (activeMatch.status === 'calling') {
                              cardBgClass = 'bg-yellow-50/80 border-yellow-400 shadow-sm';
                              badgeLabel = 'コール';
                              badgeBgClass = 'bg-yellow-500 text-white animate-pulse';
                           } else if (activeMatch.status === 'recepted' || activeMatch.status === 'in_progress') {
                              cardBgClass = 'bg-blue-50/80 border-blue-400 shadow-sm';
                              badgeLabel = '試合受付';
                              badgeBgClass = 'bg-blue-600 text-white';
                           } else if (activeMatch.status === 'completed') {
                              cardBgClass = 'bg-green-50/80 border-green-500 shadow-sm';
                              badgeLabel = 'スコア済';
                              badgeBgClass = 'bg-green-600 text-white';
                           }
                        }

                        return (
                           <div 
                              key={`court-card-${courtNum}`}
                              className={`rounded-xl border-2 p-3 transition-all min-h-[180px] flex flex-col justify-between ${cardBgClass}`}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleCourtDrop(e, courtNum)}
                           >
                              <div className="flex justify-between items-center border-b pb-1 mb-2">
                                 <span className="font-extrabold text-sm text-gray-700">第 {courtNum} コート</span>

                                 {activeMatch && (() => {
                                    const ref = getRefereeForMatch(activeMatch);
                                    return (
                                       <div className="relative group inline-block">
                                          <span className="text-[10px] bg-[#2c5f4e] text-white px-2 py-0.5 rounded cursor-pointer font-bold shadow-xs hover:bg-[#1f4236] transition-colors">
                                             審判 ℹ️
                                          </span>
                                          <div 
                                            className="absolute right-0 hidden group-hover:block w-60 bg-slate-800 text-white text-[11px] p-2.5 rounded-lg shadow-2xl z-50 pointer-events-none transition-all"
                                            style={{ bottom: '100%', top: 'auto', marginBottom: '8px' }}
                                          >
                                             <div className="font-bold border-b border-slate-600 pb-1 mb-1.5 text-emerald-400 flex justify-between">
                                                <span>審判割り当て</span>
                                                <span className="text-[9px] text-slate-300">({activeMatch.cls})</span>
                                             </div>
                                             <div className="truncate my-0.5"><span className="text-gray-400 font-bold">主・副審:</span> {ref.main}</div>
                                             <div className="truncate my-0.5"><span className="text-gray-400 font-bold">線審:</span> {ref.line}</div>
                                          </div>
                                       </div>
                                    );
                                 })()}
                              </div>

                              {activeMatch ? (
                                 <div 
                                   draggable={activeMatch.status !== 'in_progress' && activeMatch.status !== 'recepted'}
                                   onDragStart={(e) => activeMatch.status !== 'in_progress' && activeMatch.status !== 'recepted' && handleMatchDragStart(e, activeMatch.id)}
                                   className={`p-2 rounded border bg-white shadow-xs ${(activeMatch.status === 'in_progress' || activeMatch.status === 'recepted') ? 'cursor-not-allowed border-blue-300' : 'cursor-move'}`}
                                 >
                                    <div className="text-[10px] font-bold text-gray-500 mb-1">({activeMatch.cls}) グループ{activeMatch.group}</div>
                                    <div className="font-bold text-xs truncate">{getTeamNameWithClub(activeMatch.team1Id)}</div>
                                    
                                    <div className="text-xs text-center font-bold my-1">
                                       {activeMatch.status === 'completed' ? (
                                          <span className="text-green-700 bg-green-100 px-2 py-0.5 rounded font-extrabold">
                                             {activeMatch.team1Score} - {activeMatch.team2Score}
                                          </span>
                                       ) : (
                                          <span className="text-gray-400 text-[10px]">vs</span>
                                       )}
                                    </div>

                                    <div className="font-bold text-xs truncate">{getTeamNameWithClub(activeMatch.team2Id)}</div>
                                    
                                    <div className="mt-3 pt-2 border-t flex flex-wrap justify-between gap-1 items-center">
                                       <button 
                                         onClick={() => handleAssignCourt(activeMatch.id, null)} 
                                         className="text-[10px] text-red-500 hover:underline font-bold"
                                       >
                                          コート解除
                                       </button>

                                       {activeMatch.status === 'calling' && (
                                          <button 
                                            onClick={() => handleMatchStatusChange(activeMatch.id, 'recepted')}
                                            className="text-[10px] bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             コール
                                          </button>
                                       )}

                                       {activeMatch.status === 'recepted' && (
                                          <button 
                                            onClick={() => handleMatchStatusChange(activeMatch.id, 'in_progress')}
                                            className="text-[10px] bg-blue-600 hover:bg-blue-700 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             試合受付
                                          </button>
                                       )}

                                       {activeMatch.status === 'in_progress' && (
                                          <button 
                                            onClick={() => setScoreModal({ match: activeMatch, s1: activeMatch.team1Score || 0, s2: activeMatch.team2Score || 0 })} 
                                            className="text-[10px] bg-blue-600 hover:bg-blue-700 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             スコア入力
                                          </button>
                                       )}

                                       {activeMatch.status === 'completed' && (
                                          <button 
                                            onClick={() => setScoreModal({ match: activeMatch, s1: activeMatch.team1Score || 0, s2: activeMatch.team2Score || 0 })} 
                                            className="text-[10px] bg-green-600 hover:bg-green-700 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             スコア修正
                                          </button>
                                       )}
                                    </div>
                                 </div>
                              ) : (
                                 <div className="text-center text-xs text-gray-400 py-6 font-medium">
                                    ここに試合をドロップ
                                 </div>
                              )}
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-3 border-l-4 border-blue-500 pl-2">📋 優先対戦リスト (待機中の試合)</h4>
                  <div className="bg-white rounded-xl border p-4 shadow-sm max-h-[500px] overflow-y-auto">
                     {getSortedWaitingMatches().length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                           {getSortedWaitingMatches().map(m => {
                              const busyIds = getBusyTeamIds();
                              const isTeam1Busy = busyIds.has(String(m.team1Id));
                              const isTeam2Busy = busyIds.has(String(m.team2Id));
                              const isAnyBusy = isTeam1Busy || isTeam2Busy;

                              return (
                                <div 
                                  key={m.id}
                                  draggable={!isAnyBusy}
                                  onDragStart={(e) => !isAnyBusy && handleMatchDragStart(e, m.id)}
                                  className={`border p-3 rounded-lg shadow-xs transition-all flex flex-col justify-between ${isAnyBusy ? 'bg-gray-100 opacity-60 cursor-not-allowed border-gray-300' : 'bg-gray-50 hover:border-blue-400 cursor-move hover:shadow-sm'}`}
                                >
                                   <div>
                                      <div className="flex justify-between items-center mb-1.5">
                                         <span className="text-[10px] font-mono font-bold bg-gray-200 px-1.5 py-0.5 rounded text-gray-600">順序 {m.matchOrder}</span>
                                         <div className="flex items-center gap-1">
                                            {isAnyBusy && <span className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">他コートで進行中</span>}
                                            <span className="text-xs font-bold text-blue-800">({m.cls}) グループ{m.group}</span>
                                         </div>
                                      </div>
                                      <div className={`font-bold text-sm truncate ${isTeam1Busy ? 'text-red-500 line-through' : 'text-gray-800'}`}>{getTeamNameWithClub(m.team1Id)}</div>
                                      <div className="text-xs text-gray-400 text-center my-1 font-bold">vs</div>
                                      <div className={`font-bold text-sm truncate ${isTeam2Busy ? 'text-red-500 line-through' : 'text-gray-800'}`}>{getTeamNameWithClub(m.team2Id)}</div>
                                   </div>
                                   <div className="mt-3 pt-2 border-t text-right">
                                      <span className="text-[10px] text-gray-400">
                                         {isAnyBusy ? 'ペア試合終了待ち ⏳' : 'ドラッグしてコートへ配置 ➔'}
                                      </span>
                                   </div>
                                </div>
                              );
                           })}
                        </div>
                     ) : (
                        <div className="text-center text-gray-400 py-12">
                           {matches.length === 0 ? (
                              <div>
                                 <div>対戦カードがありません。</div>
                                 <button onClick={() => config.classes.forEach(c => generateLeagueMatches(c))} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-xs font-bold shadow">
                                    対戦カードを一括生成
                                 </button>
                              </div>
                           ) : (
                              <div>すべての試合がコート割り当て済み、または終了しています。</div>
                           )}
                        </div>
                     )}
                  </div>
               </div>
            </div>
          )}

          {adminTab === 'data' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold border-b pb-2 flex items-center gap-2 text-slate-800">
                 <IconDatabase /> データ管理
              </h3>

              <div className="bg-white border rounded-xl p-6 shadow-sm space-y-8">
                 {/* 1. クラス別テスト自動エントリー生成 */}
                 <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-1.5">
                       ⚙️ テスト用自動エントリー生成 (クラス別)
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                       各クラスごとに指定した人数のテストエントリーを自動生成してデータベースに登録します。
                    </p>
                    <div className="space-y-3 bg-gray-50 p-4 rounded-lg border">
                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {config.classes.map(cls => (
                             <div key={`test-gen-${cls}`} className="bg-white p-3 rounded border flex flex-col items-center shadow-2xs">
                                <span className="font-bold text-sm text-[#2c5f4e] mb-1">{cls}</span>
                                <div className="flex items-center gap-1">
                                   <input 
                                     type="number" 
                                     min="0" 
                                     max="50"
                                     className="w-16 p-1 border rounded text-center text-base font-bold bg-white focus:ring-2 focus:ring-[#2c5f4e] outline-none"
                                     value={testGenCounts[cls] !== undefined ? testGenCounts[cls] : 12}
                                     onChange={e => setTestGenCounts({ ...testGenCounts, [cls]: parseInt(e.target.value) || 0 })}
                                   />
                                   <span className="text-sm font-bold text-gray-700">組</span>
                                </div>
                             </div>
                          ))}
                       </div>
                       <div className="flex justify-end pt-2">
                          <button 
                            onClick={handleGenerateTestData}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow flex items-center gap-1.5"
                          >
                             <IconPlus /> テストデータ生成実行
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* 2. データの退避・復元 (ローカル) */}
                 <div className="border-t pt-6">
                    <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-1.5">
                       💾 データの退避・復元 (ローカルバックアップ)
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                       現在の設定・エントリー・試合結果・審判割り当てデータをJSONファイルとしてパソコンに保存（退避）したり、保存したファイルから復元できます。
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border">
                       <div className="bg-white p-4 rounded-lg border shadow-2xs space-y-2">
                          <span className="font-bold text-sm text-gray-800 block">① データをローカルに退避 (ダウンロード)</span>
                          <p className="text-xs text-gray-600">現在の全状態をファイル（.json）として保存します。</p>
                          <button 
                            onClick={handleExportBackup}
                            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-2.5 rounded-lg shadow flex items-center justify-center gap-1.5 mt-2"
                          >
                             📥 バックアップファイルを保存（退避）
                          </button>
                       </div>

                       <div className="bg-white p-4 rounded-lg border shadow-2xs space-y-2">
                          <span className="font-bold text-sm text-gray-800 block">② 保存ファイルから復元 (アップロード)</span>
                          <p className="text-xs text-gray-600">退避したJSONファイルを読み込み、データを全上書き復元します。</p>
                          <label className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2.5 rounded-lg shadow flex items-center justify-center gap-1.5 mt-2 cursor-pointer">
                             📤 バックアップファイルを選択して復元
                             <input 
                               type="file" 
                               accept=".json" 
                               onChange={handleImportBackup} 
                               className="hidden" 
                             />
                          </label>
                       </div>
                    </div>
                 </div>

                 {/* 3. 全データ初期化（削除） */}
                 <div className="border-t pt-6">
                    <h4 className="font-bold text-lg text-red-600 mb-2 flex items-center gap-1.5">
                       🗑️ 全データ初期化（削除）
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                       現在登録されている「すべてのエントリーデータ」および「全試合結果・コート進行状態」を一括削除します。大会やり直し時やテスト終了時に使用してください。
                    </p>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex justify-between items-center">
                       <span className="text-sm font-bold text-red-800">⚠️ 削除実行後はデータを元に戻せません</span>
                       <button 
                         onClick={handleDeleteAllEntries}
                         className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow flex items-center gap-1.5"
                       >
                          <IconTrash /> 全エントリー・全試合結果クリア
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-xl text-gray-500">データを読み込み中...</div>;

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-[#2c5f4e] text-lg flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab('home')}>
             <IconTrophy /> 大会運営ポータル
          </div>
          <div className="flex gap-2 md:gap-4">
             <button onClick={() => {setEditMode(false); setCurrentTab('entry');}} className="text-xs md:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 px-3 md:px-4 py-2 rounded-lg flex items-center gap-1"><IconUser /> エントリー</button>
             <button onClick={() => setCurrentTab('editLogin')} className="text-xs md:text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 md:px-4 py-2 rounded-lg flex items-center gap-1 hidden md:flex">修正・取消</button>
             <button onClick={() => { if(isAdminLoggedIn) { setCurrentTab('admin'); } else { setCurrentTab('adminLogin'); } }} className="text-xs md:text-sm font-bold text-gray-600 hover:text-gray-900 px-2 py-2 flex items-center gap-1 border-l ml-2 pl-4"><IconSettings /> 管理</button>
          </div>
        </div>
      </header>

      <main className="p-4 md:p-8">
        {currentTab === 'home' && viewHome}
        {currentTab === 'entry' && viewEntryForm}
        {currentTab === 'editLogin' && viewEditLogin}
        {currentTab === 'dashboard' && viewDashboard}
        {currentTab === 'adminLogin' && viewAdminLogin}
        {currentTab === 'admin' && (isAdminLoggedIn ? viewAdmin : viewAdminLogin)}
      </main>

      {scoreModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100] animate-fade-in">
           <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">試合結果の入力</h3>
              <p className="text-xs text-gray-500 text-center mb-6">({scoreModal.match.cls}) グループ{scoreModal.match.group}</p>

              <div className="grid grid-cols-2 gap-4 items-center mb-6">
                 <div className="text-center p-3 bg-blue-50 rounded-lg border">
                    <div className="font-bold text-sm text-blue-900 truncate mb-2">{getTeamNameWithClub(scoreModal.match.team1Id)}</div>
                    <input 
                      type="number" 
                      min="0"
                      className="w-20 p-2 text-center text-2xl font-extrabold border-2 border-blue-400 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      value={scoreModal.s1}
                      onChange={e => setScoreModal({ ...scoreModal, s1: parseInt(e.target.value) || 0 })}
                    />
                 </div>

                 <div className="text-center p-3 bg-red-50 rounded-lg border">
                    <div className="font-bold text-sm text-red-900 truncate mb-2">{getTeamNameWithClub(scoreModal.match.team2Id)}</div>
                    <input 
                      type="number" 
                      min="0"
                      className="w-20 p-2 text-center text-2xl font-extrabold border-2 border-red-400 rounded focus:ring-2 focus:ring-red-500 outline-none"
                      value={scoreModal.s2}
                      onChange={e => setScoreModal({ ...scoreModal, s2: parseInt(e.target.value) || 0 })}
                    />
                 </div>
              </div>

              <div className="flex gap-2 justify-end border-t pt-4">
                 <button onClick={() => setScoreModal(null)} className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded">キャンセル</button>
                 <button onClick={() => handleSaveScore(scoreModal.match.id, scoreModal.s1, scoreModal.s2)} className="px-6 py-2 bg-[#2c5f4e] text-white font-bold rounded shadow">確定して保存</button>
              </div>
           </div>
        </div>
      )}

      {dialog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100] animate-fade-in">
           <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{dialog.title}</h3>
              <div className="text-gray-600 mb-6">{dialog.message}</div>
              <div className="flex justify-end">
                {dialog.onConfirm && (
                  <button 
                    onClick={dialog.onConfirm} 
                    className={`${dialog.confirmBg || 'bg-red-500'} text-white px-6 py-2 rounded-lg font-bold mr-2`}
                  >
                    {dialog.confirmText || '削除する'}
                  </button>
                )}
                <button onClick={dialog.close || dialog.onClose} className="bg-[#2c5f4e] text-white px-6 py-2 rounded-lg font-bold">閉じる</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}