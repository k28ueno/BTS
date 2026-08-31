import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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

// 「令和8年12月6日(日)」「11月27日(金)」形式の和暦表示文字列と<input type="date">の相互変換
const WEEKDAYS_JP = ['日', '月', '火', '水', '木', '金', '土'];
const REIWA_OFFSET = 2018; // 令和1年 = 西暦2019年

const parseJapaneseFullDate = (str) => {
  const m = (str || '').match(/令和(\d+)年(\d+)月(\d+)日/);
  if (!m) return null;
  const date = new Date(parseInt(m[1], 10) + REIWA_OFFSET, parseInt(m[2], 10) - 1, parseInt(m[3], 10));
  return isNaN(date.getTime()) ? null : date;
};

const formatJapaneseFullDate = (date) => {
  if (!date || isNaN(date.getTime())) return '';
  return `令和${date.getFullYear() - REIWA_OFFSET}年${date.getMonth() + 1}月${date.getDate()}日(${WEEKDAYS_JP[date.getDay()]})`;
};

const parseJapaneseMonthDay = (str, fallbackYear) => {
  const m = (str || '').match(/(\d+)月(\d+)日/);
  if (!m) return null;
  const date = new Date(fallbackYear, parseInt(m[1], 10) - 1, parseInt(m[2], 10));
  return isNaN(date.getTime()) ? null : date;
};

const formatJapaneseMonthDay = (date) => {
  if (!date || isNaN(date.getTime())) return '';
  return `${date.getMonth() + 1}月${date.getDate()}日(${WEEKDAYS_JP[date.getDay()]})`;
};

const dateToInputValue = (date) => {
  if (!date || isNaN(date.getTime())) return '';
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

const inputValueToDate = (value) => {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return isNaN(date.getTime()) ? null : date;
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
  // 試合が実際にコートへ割り当てられた瞬間の審判割り当てを固定する（{ [matchId]: 審判情報 }）
  const [lockedReferees, setLockedReferees] = useState({});

  // ----------------------------------------------------------------
  // 共通ヘルパー関数群
  // ----------------------------------------------------------------
  const getTeamNameWithClub = (teamId) => {
    const ent = entries.find(e => String(e.id) === String(teamId));
    if (!ent) return '未定';
    const clubStr = ent.club ? ` (${ent.club})` : '';
    return `${ent.p1Name}・${ent.p2Name}${clubStr}`;
  };

  const getPairFee = (ent) => {
    if (!ent) return 0;
    const cat = ent.feeCategory || ent.p1Fee || '一般';
    return config.fees[cat] ?? (cat === '高校生まで' ? 2000 : 4000);
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

  const getAllOccupiedRefereeIds = (currentCourtNum, extraOccupiedIds) => {
    const occupied = new Set(extraOccupiedIds || []);

    Object.keys(lastCourtReferees).forEach(cNum => {
      if (Number(cNum) !== Number(currentCourtNum)) {
        const ref = lastCourtReferees[cNum];
        if (ref && ref.mainId) occupied.add(String(ref.mainId));
        if (ref && ref.lineId) occupied.add(String(ref.lineId));
      }
    });

    matches.forEach(m => {
      if (m.courtNumber !== null && Number(m.courtNumber) !== Number(currentCourtNum) && (m.status === 'calling' || m.status === 'recepted' || m.status === 'in_progress')) {
        if (m.team1Id) occupied.add(String(m.team1Id));
        if (m.team2Id) occupied.add(String(m.team2Id));
      }
    });

    // 他コートで進行中の試合に既にロック済みの審判も、二重に割り当てないよう除外する
    matches.forEach(m => {
      if (m.courtNumber !== null && Number(m.courtNumber) !== Number(currentCourtNum) && m.status !== 'completed' && lockedReferees[m.id]) {
        const ref = lockedReferees[m.id];
        if (ref.mainId) occupied.add(String(ref.mainId));
        if (ref.lineId) occupied.add(String(ref.lineId));
      }
    });

    return occupied;
  };

  const STAFF_REFEREE_LABEL = "本部スタッフへ審判を依頼";

  const getRefereeForMatch = (m, extraOccupiedIds, lastRefMapOverride) => {
    if (!m) return { main: '未定', mainId: null, line: '未定', lineId: null, substitutionNotes: [] };
    const lastRefMap = lastRefMapOverride || lastCourtReferees;

    if (m.matchType !== 'league') {
      return { main: "本部調整 / 敗者審判", mainId: null, line: "本部調整 / 敗者審判", lineId: null, substitutionNotes: [] };
    }

    // 実際にコートへ割り当てられた瞬間に確定した審判は、以後の状態変化で再計算・変動させない
    if (lockedReferees[m.id]) return lockedReferees[m.id];

    // 自分自身の次戦と連戦になり審判を続けられないペアがいれば差し替える。
    // 候補は「同クラス（グループは問わない）→他クラス」の順で、今まさに他で使われていない組を探し、
    // それでも見つからなければ本部スタッフに依頼する
    // （「他に次戦の予定がある」だけでは対象から外さない＝ラウンドロビンでは常にほぼ全員に次戦があるため）
    const occupiedRefIds = getAllOccupiedRefereeIds(m.courtNumber, extraOccupiedIds);
    const label = (e) => getTeamNameWithClub(e.id) + (e.cls !== m.cls ? `（${e.cls}から応援）` : '');

    const findCandidates = (excludeIds) => {
      const classRank = (e) => (e.cls !== m.cls ? 1 : 0);
      return entries
        .filter(e => e.checkedIn && !excludeIds.has(String(e.id)) && !occupiedRefIds.has(String(e.id)))
        .sort((a, b) => classRank(a) - classRank(b) || String(a.id).localeCompare(String(b.id)));
    };

    const courtCompletedMatches = matches.filter(x => Number(x.courtNumber) === Number(m.courtNumber) && x.status === 'completed');

    if (m.courtNumber !== null && courtCompletedMatches.length > 0 && lastRefMap[m.courtNumber]) {
      const lastRef = lastRefMap[m.courtNumber];

      let mainId = lastRef.mainId;
      let lineId = lastRef.lineId;
      let mainText = lastRef.main;
      let lineText = lastRef.line;

      const t1 = m.status !== 'completed' ? String(m.team1Id) : null;
      const t2 = m.status !== 'completed' ? String(m.team2Id) : null;
      const substitutionNotes = [];

      const resolveRole = (roleId, roleText, roleLabel, otherRoleId) => {
        if (!roleId) return { id: roleId, text: roleText };
        const selfMatch = String(roleId) === t1 || String(roleId) === t2;
        if (!selfMatch) {
          return { id: roleId, text: roleText };
        }
        const excludeIds = new Set([t1, t2, otherRoleId ? String(otherRoleId) : null].filter(Boolean));
        const candidates = findCandidates(excludeIds);
        if (candidates.length > 0) {
          const sub = candidates[0];
          const newText = label(sub);
          // 同クラス内（他グループ含む）への交代は原則の範囲内として無警告。他クラスへの応援依頼のみ通知する
          if (sub.cls !== m.cls) {
            substitutionNotes.push(`${roleLabel}は本来${roleText}ですが、直後に連戦になるため${newText}に交代しました`);
          }
          return { id: sub.id, text: newText };
        }
        substitutionNotes.push(`${roleLabel}(${roleText})の代役が見つからないため、${STAFF_REFEREE_LABEL}してください`);
        return { id: null, text: STAFF_REFEREE_LABEL };
      };

      // 線審→主審の優先順位で解決する（先に解決した側の交代先を、後に解決する側の候補から除外するため）
      const lineResolved = resolveRole(lineId, lineText, '線審', mainId);
      lineId = lineResolved.id; lineText = lineResolved.text;
      const mainResolved = resolveRole(mainId, mainText, '主審', lineId);
      mainId = mainResolved.id; mainText = mainResolved.text;

      return { main: mainText, mainId, line: lineText, lineId, substitutionNotes };
    }

    const t1 = String(m.team1Id);
    const t2 = String(m.team2Id);
    let candidates = findCandidates(new Set([t1, t2]));

    // 審判候補の同クラス2組が実は互いの対戦カード（未消化）だった場合、審判に固定すると
    // その2組自身の試合が進行不能になってしまう…と思いきや、これは「クラスの総組数が4組」という
    // 静的な条件だけでほぼ常に成り立ってしまい、ラウンドロビン序盤（他に消化すべき待機試合が
    // まだ大量に残っている段階）でも毎回発動して不要に他クラスへ応援を求めてしまっていた。
    // 本当に問題になるのは「この試合を除くと、クラス内に残る待機試合がこの2組の対戦カードだけ」
    // という、他に手の打ちようが無い最終局面に限られる
    if (candidates.length >= 2) {
      const sameClassCandidates = candidates.filter(c => c.cls === m.cls);
      if (sameClassCandidates.length === 2) {
        const pairIds = [String(sameClassCandidates[0].id), String(sameClassCandidates[1].id)].sort().join('-');
        const otherWaitingClassMatches = matches.filter(x =>
          x.cls === m.cls && x.matchType === 'league' && x.status === 'waiting' && x.id !== m.id
        );
        const isOnlyRemainingOption = otherWaitingClassMatches.length === 1 &&
          [String(otherWaitingClassMatches[0].team1Id), String(otherWaitingClassMatches[0].team2Id)].sort().join('-') === pairIds;
        if (isOnlyRemainingOption) {
          const widened = findCandidates(new Set([t1, t2, ...pairIds.split('-')]));
          if (widened.length >= 2) {
            candidates = widened;
          }
        }
      }
    }

    // 同クラス内（グループは問わない）への依頼は原則の範囲内として無警告。他クラスへ応援を依頼した場合のみ通知する
    const offPrincipleNote = (e, roleLabel) => e.cls !== m.cls
      ? `${roleLabel}は同クラスに空きペアがいないため、${label(e)}（他クラス）に依頼しました`
      : null;

    if (candidates.length >= 2) {
       const notes = [offPrincipleNote(candidates[0], '主審'), offPrincipleNote(candidates[1], '線審')].filter(Boolean);
       return { main: label(candidates[0]), mainId: candidates[0].id, line: label(candidates[1]), lineId: candidates[1].id, substitutionNotes: notes };
    } else if (candidates.length === 1) {
       const notes = [offPrincipleNote(candidates[0], '主審'), `線審の担当が見つからないため、${STAFF_REFEREE_LABEL}してください`].filter(Boolean);
       return { main: label(candidates[0]), mainId: candidates[0].id, line: STAFF_REFEREE_LABEL, lineId: null, substitutionNotes: notes };
    } else {
       return { main: STAFF_REFEREE_LABEL, mainId: null, line: STAFF_REFEREE_LABEL, lineId: null, substitutionNotes: [`主審・線審とも担当が見つからないため、${STAFF_REFEREE_LABEL}してください`] };
    }
  };

  const getBusyTeamDetails = () => {
    const busyMap = new Map();

    matches.forEach(m => {
      if (m.courtNumber !== null && (m.status === 'calling' || m.status === 'recepted' || m.status === 'in_progress')) {
        if (m.team1Id) busyMap.set(String(m.team1Id), { court: m.courtNumber, role: '試合進行中' });
        if (m.team2Id) busyMap.set(String(m.team2Id), { court: m.courtNumber, role: '試合進行中' });
      }
    });

    for (let c = 1; c <= config.courts; c++) {
      const activeMatch = getActiveMatchForCourt(c);
      // 次の試合が実際にそのコートへ割り当てられるまでは、前試合の勝者・敗者を審判として拘束しない
      // （そうしないと、次戦が未割当なだけで該当ペアが他コートへの配置対象からブロックされ続けてしまう）
      if (activeMatch && activeMatch.status !== 'completed') {
        const ref = getRefereeForMatch(activeMatch);
        if (ref.mainId && !busyMap.has(String(ref.mainId))) {
          busyMap.set(String(ref.mainId), { court: c, role: '審判担当中' });
        }
        if (ref.lineId && ref.lineId !== ref.mainId && !busyMap.has(String(ref.lineId))) {
          busyMap.set(String(ref.lineId), { court: c, role: '審判担当中' });
        }
      }
    }

    return busyMap;
  };

  const getBusyTeamIds = () => {
    const busyMap = getBusyTeamDetails();
    return new Set(busyMap.keys());
  };

  // まだ次の試合が割り当てられていないコートの「予測上の次審判」を情報表示用に返す（ブロックはしない）
  const getPredictedRefereeDetails = () => {
    const predictedMap = new Map();

    for (let c = 1; c <= config.courts; c++) {
      const activeMatch = getActiveMatchForCourt(c);
      // 「この完了試合を誰が審判したか」ではなく「この完了試合の勝者・敗者が次に誰を審判するか」を知りたいので、
      // getRefereeForMatch（＝その試合自身の審判＝1つ前の試合の勝敗）には頼らず、この試合自身の勝敗から直接求める
      if (activeMatch && activeMatch.status === 'completed' && activeMatch.team1Score !== null && activeMatch.team2Score !== null) {
        const winnerId = activeMatch.team1Score >= activeMatch.team2Score ? activeMatch.team1Id : activeMatch.team2Id;
        const loserId = activeMatch.team1Score >= activeMatch.team2Score ? activeMatch.team2Id : activeMatch.team1Id;
        if (winnerId && !predictedMap.has(String(winnerId))) {
          predictedMap.set(String(winnerId), { court: c });
        }
        if (loserId && !predictedMap.has(String(loserId))) {
          predictedMap.set(String(loserId), { court: c });
        }
      }
    }

    return predictedMap;
  };

  const getSortedWaitingMatches = () => {
    const busyIds = getBusyTeamIds();
    const predictedIds = getPredictedRefereeDetails();
    const waitingMatches = matches.filter(m => m.status === 'waiting');

    // 優先度: ①両チームとも今すぐ完全に空いている ②片方/両方に次審判予定あり（今は空いているがブロックはしていない） ③ブロック中
    const tierOf = (m) => {
      if (busyIds.has(String(m.team1Id)) || busyIds.has(String(m.team2Id))) return 2;
      if (predictedIds.has(String(m.team1Id)) || predictedIds.has(String(m.team2Id))) return 1;
      return 0;
    };

    return [...waitingMatches].sort((a, b) => {
      const tierDiff = tierOf(a) - tierOf(b);
      if (tierDiff !== 0) return tierDiff;
      return a.matchOrder - b.matchOrder;
    });
  };

  // ページ読み込み時など、lastCourtReferees（直前コートの勝者・敗者記録）が消えている完了済みコートを、
  // 実際の直近の試合結果から復元する。DBに保存されない状態のため、リロードのたびに再構築が必要
  useLayoutEffect(() => {
    if (loading) return;

    // 完了済みなのに「その試合自身の審判」がまだロックされていないもの（リロード直後・別端末など）を、
    // 直後の予測用キャッシュ更新より先に確定させる。
    // 先にキャッシュ（lastCourtReferees）を書き換えてしまうと、そのコートの「直近完了試合」が
    // 自分自身になってしまい、「自分たちが自分たちの試合を審判した」という辻褄の合わない表示になる
    const completedNeedingLock = matches
      .filter(m => m.matchType === 'league' && m.courtNumber !== null && m.status === 'completed' && !lockedReferees[m.id])
      .sort((a, b) => Number(a.courtNumber) - Number(b.courtNumber));

    if (completedNeedingLock.length > 0) {
      const claimed = new Set();
      const historyLocks = {};
      completedNeedingLock.forEach(m => {
        const ref = getRefereeForMatch(m, claimed, lastCourtReferees);
        historyLocks[m.id] = ref;
        if (ref.mainId) claimed.add(String(ref.mainId));
        if (ref.lineId) claimed.add(String(ref.lineId));
      });
      setLockedReferees(prev => ({ ...prev, ...historyLocks }));
    }

    // 「一度セットしたら維持」ではなく、そのコートの本当の最新完了試合から毎回再計算する。
    // そうしないと、別端末での更新や新たな試合の完了があっても、古い勝者・敗者が審判予定として残り続けてしまう
    const backfilled = {};
    let changed = false;

    for (let c = 1; c <= config.courts; c++) {
      const activeMatch = getActiveMatchForCourt(c);
      if (!activeMatch || activeMatch.status !== 'completed') continue;
      if (activeMatch.team1Score === null || activeMatch.team2Score === null) continue;

      const winnerId = activeMatch.team1Score >= activeMatch.team2Score ? activeMatch.team1Id : activeMatch.team2Id;
      const loserId = activeMatch.team1Score >= activeMatch.team2Score ? activeMatch.team2Id : activeMatch.team1Id;
      backfilled[c] = {
        main: getTeamNameWithClub(winnerId), mainId: winnerId,
        line: getTeamNameWithClub(loserId), lineId: loserId
      };

      const prev = lastCourtReferees[c];
      if (!prev || String(prev.mainId) !== String(winnerId) || String(prev.lineId) !== String(loserId)) {
        changed = true;
      }
    }

    if (changed) setLastCourtReferees(prev => ({ ...prev, ...backfilled }));

    // ページ読み込み時など、既にコートに割り当て済みだがロックされていない進行中の試合をコート番号順に確定させる。
    // コート単位で逐次計算し、直前のコートで確定した審判を次のコートの候補から除外することで、
    // 同一レンダー内で複数コートに同じペアが重複して審判割り当てされるのを防ぐ
    const unlockedActiveMatches = matches
      .filter(m => m.matchType === 'league' && m.courtNumber !== null && m.status !== 'completed' && !lockedReferees[m.id])
      .sort((a, b) => Number(a.courtNumber) - Number(b.courtNumber));
    if (unlockedActiveMatches.length === 0) return;

    const claimed = new Set();
    const newLocks = {};
    unlockedActiveMatches.forEach(m => {
      const ref = getRefereeForMatch(m, claimed, backfilled);
      newLocks[m.id] = ref;
      if (ref.mainId) claimed.add(String(ref.mainId));
      if (ref.lineId) claimed.add(String(ref.lineId));
    });

    setLockedReferees(prev => ({ ...prev, ...newLocks }));
  }, [loading, matches]);

  // 大会名見出しの幅に合わせてフォントサイズを実測調整する（文字数によらず常に1行に収める）
  const [titleFontSize, setTitleFontSize] = useState(48);
  const titleObserverRef = useRef(null);

  // タブ切替による再マウント時にも確実に再計測されるよう、依存配列型のuseEffectではなくref自体をトリガーにする
  const measureTitleRef = (el) => {
    if (titleObserverRef.current) {
      titleObserverRef.current.disconnect();
      titleObserverRef.current = null;
    }
    if (!el) return;

    const MAX_SIZE = 48;
    const MIN_SIZE = 12;
    const REF_SIZE = 100;

    const compute = () => {
      const style = window.getComputedStyle(el);
      const paddingX = parseFloat(style.paddingLeft || '0') + parseFloat(style.paddingRight || '0');
      const availableWidth = el.clientWidth - paddingX;
      const text = config.title || '';
      if (availableWidth <= 0 || !text) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.font = `800 ${REF_SIZE}px ${style.fontFamily}`;
      const baseWidth = ctx.measureText(text).width;
      if (baseWidth <= 0) return;
      // tracking-wider(letter-spacing: 0.05em)はcanvasのmeasureTextに反映されないため加算する
      const charCount = Array.from(text).length;
      const trackingWidth = REF_SIZE * 0.05 * Math.max(charCount - 1, 0);
      const measuredWidth = baseWidth + trackingWidth;

      // ブラウザ間のフォント描画誤差を吸収する安全マージン
      const fitSize = (availableWidth / measuredWidth) * REF_SIZE * 0.97;
      setTitleFontSize(Math.max(MIN_SIZE, Math.min(MAX_SIZE, Math.floor(fitSize))));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    titleObserverRef.current = ro;
  };

  // ----------------------------------------------------------------

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

  // 複数端末で別々のコートを操作していても表示がズレないよう、エントリー・試合状況を定期的にバックグラウンド再取得する
  // （設定はここでは対象外：編集中のマスタ設定フォームを上書きしてしまうため）
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    const interval = setInterval(() => {
      fetchEntries();
      fetchMatches();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // カードを画面上端/下端付近までドラッグしたら、ページ全体を自動スクロールする。
  // 優先対戦リスト内だけでなく、コート配置エリアが画面外（スクロール先）にある場合にも
  // ドラッグ移動できるようにするため、window単位で監視する
  useEffect(() => {
    const edge = 80;
    const speed = 16;
    const handleWindowDragOver = (e) => {
      if (e.clientY < edge) {
        window.scrollBy(0, -speed);
      } else if (window.innerHeight - e.clientY < edge) {
        window.scrollBy(0, speed);
      }
    };
    window.addEventListener('dragover', handleWindowDragOver);
    return () => window.removeEventListener('dragover', handleWindowDragOver);
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

  // 削除系の操作は実行前に「ローカルへバックアップしてから削除」を選べるようにする共通ダイアログ
  const confirmDestructiveAction = (title, warningText, onProceed) => {
    setDialog({
      title,
      message: (
        <div className="text-left space-y-4">
          <p className="text-red-800 font-bold bg-red-50 border border-red-200 rounded-lg p-3 text-sm">⚠️ {warningText}</p>
          <p className="text-sm text-gray-600">削除する前に、念のため現在のデータをローカルにバックアップ保存できます。</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => { handleExportBackup(); setDialog(null); onProceed(); }}
              className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-lg shadow-sm"
            >
              📥 バックアップしてから削除
            </button>
            <button
              onClick={() => { setDialog(null); onProceed(); }}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg shadow-sm"
            >
              バックアップせず削除
            </button>
          </div>
        </div>
      ),
      onClose: () => setDialog(null)
    });
  };

  const handleDeleteAllEntries = () => {
    confirmDestructiveAction(
      "全エントリーの削除確認",
      "登録されているすべてのエントリーデータと試合結果データを削除します。本当によろしいですか？",
      async () => {
        setEntries([]);
        setMatches([]);
        setLastCourtReferees({});
        setLockedReferees({});
        if (isSupabaseConfigured) {
          await supabase.from('entries').delete().gt('created_at', '1970-01-01');
          await supabase.from('matches').delete().gt('created_at', '1970-01-01');
        }
        setDialog({ title: "削除完了", message: "すべてのエントリーおよび試合データを削除しました。", onClose: () => setDialog(null) });
      }
    );
  };

  const handleDeleteMatchResultsOnly = () => {
    confirmDestructiveAction(
      "試合結果の削除確認",
      "現在のすべての試合結果・コート進行状態を削除します（エントリーデータは保持されます）。決勝トーナメントの配置も無効になるためリセットされます。本当によろしいですか？",
      async () => {
        setMatches([]);
        setLastCourtReferees({});
        setLockedReferees({});
        // 予選結果が消える以上、それに基づく決勝トーナメントのシード配置も古いまま残すと辻褄が合わないためリセットする
        setEntries(prev => prev.map(e => ({ ...e, tournamentPosition: null })));
        if (isSupabaseConfigured) {
          await supabase.from('matches').delete().gt('created_at', '1970-01-01');
          await supabase.from('entries').update({ tournamentposition: null }).gt('created_at', '1970-01-01');
        }
        setDialog({ title: "削除完了", message: "すべての試合結果・コート進行状態、および決勝トーナメントの配置を削除しました。", onClose: () => setDialog(null) });
      }
    );
  };

  const handleGenerateTestData = async () => {
    const clubs = ['熊野バドミントン', '紀北クラブ', '松阪BC', '伊勢シャトルズ', '尾鷲バド同好会', '津フェニックス'];
    const familyNames = ['佐藤', '鈴木', '高橋', '田中', '伊藤', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村'];
    const givenNames = ['太郎', '次郎', '健太', '大輔', '直樹', '拓也', '翔太', '花子', '美咲', '彩乃', '葵', '優花', '結衣', '陽菜'];

    let totalToGen = 0;
    config.classes.forEach(cls => {
      totalToGen += parseInt(testGenCounts[cls]) || 0;
    });

    if (totalToGen === 0) {
      setDialog({ title: "注意", message: "生成する組数が設定されていません。各クラスの組数を入力してください。", onClose: () => setDialog(null) });
      return;
    }

    setEntries([]);
    setMatches([]);
    setLastCourtReferees({});
    setLockedReferees({});

    if (isSupabaseConfigured) {
      await supabase.from('entries').delete().gt('created_at', '1970-01-01');
      await supabase.from('matches').delete().gt('created_at', '1970-01-01');
    }

    const newEntries = [];
    const dbPayloads = [];
    let currentIdCount = 0;

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

    setEntries(newEntries);

    if (isSupabaseConfigured && dbPayloads.length > 0) {
      await supabase.from('entries').insert(dbPayloads);
    }

    setDialog({
      title: "テストデータ作成完了",
      message: `※既存データを全削除（クリア）した上で、新たに合計 ${newEntries.length} 組のテストエントリーを作成しました。`,
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

  // ---- タップ操作によるモバイル向け移動（PCのドラッグ&ドロップと並行して利用可能） ----
  const [tapMoveSelection, setTapMoveSelection] = useState(null); // { kind: 'entry'|'match', id, label }

  const toggleTapSelect = (kind, id, label) => (e) => {
    e.stopPropagation();
    setTapMoveSelection(prev => (prev && prev.kind === kind && prev.id === id) ? null : { kind, id, label });
  };

  const moveEntryToGroup = async (entryId, targetGroup) => {
    if (!entryId) return;
    const targetEntry = entries.find(ent => ent.id === entryId);
    const updatedEntries = entries.map(ent => ent.id === entryId ? { ...ent, group: targetGroup } : ent);
    setEntries(updatedEntries);

    // タップで選択中のエントリーをドラッグでも移動できてしまうため、移動できたらタップ選択を解除する
    setTapMoveSelection(prev => (prev && prev.kind === 'entry' && prev.id === entryId) ? null : prev);

    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ group: targetGroup }).eq('id', entryId);
    }

    if (targetEntry) {
      await generateLeagueMatches(targetEntry.cls, updatedEntries);
    }
  };

  const handleDrop = async (e, targetGroup) => {
    e.preventDefault();
    const entryId = e.dataTransfer.getData('text/plain');
    if (!entryId) return;
    await moveEntryToGroup(entryId, targetGroup);
  };

  const handleGroupZoneTap = (targetGroup) => async () => {
    if (!tapMoveSelection || tapMoveSelection.kind !== 'entry') return;
    const entryId = tapMoveSelection.id;
    setTapMoveSelection(null);
    await moveEntryToGroup(entryId, targetGroup);
  };

  const moveMatchToCourt = async (matchId, courtNum) => {
    const targetMatch = matches.find(m => m.id === matchId);
    if (!targetMatch) return;

    const busyMap = getBusyTeamDetails();
    const team1Busy = busyMap.get(String(targetMatch.team1Id));
    const team2Busy = busyMap.get(String(targetMatch.team2Id));

    const checkTeamBusy = (busyInfo, teamId) => {
      if (!busyInfo) return null;

      if (busyInfo.role === '試合進行中') {
        const teamName = getTeamNameWithClub(teamId);
        return `「${teamName}」は現在 第${busyInfo.court}コート で【試合進行中】です。同時に複数コートへ配置することはできません。`;
      }

      if (busyInfo.role === '審判担当中') {
        if (Number(busyInfo.court) !== Number(courtNum)) {
          const teamName = getTeamNameWithClub(teamId);
          return `「${teamName}」は 第${busyInfo.court}コート の【審判予定ペア】です。審判を務める前に別のコート（第${courtNum}コート）へ配置することはできません。`;
        }
      }

      return null;
    };

    const err1 = checkTeamBusy(team1Busy, targetMatch.team1Id);
    if (err1) {
      setDialog({ title: "コート配置不可", message: err1, onClose: () => setDialog(null) });
      return;
    }

    const err2 = checkTeamBusy(team2Busy, targetMatch.team2Id);
    if (err2) {
      setDialog({ title: "コート配置不可", message: err2, onClose: () => setDialog(null) });
      return;
    }

    const currentActiveOnCourt = getActiveMatchForCourt(courtNum);
    if (currentActiveOnCourt && (currentActiveOnCourt.status === 'in_progress' || currentActiveOnCourt.status === 'recepted')) {
      setDialog({ title: "ドロップ不可", message: "進行中のコートには新しい試合をドラッグ割り当てできません。コート解除またはスコア確定を行ってください。", onClose: () => setDialog(null) });
      return;
    }

    // 同クラス内の別グループへの依頼は原則の範囲内として無警告で進めるが、
    // 他クラスへの応援依頼や本部スタッフ対応が必要になる場合は、配置前に管理者へ確認を求める
    if (courtNum !== null) {
      const wouldBeRef = getRefereeForMatch({ ...targetMatch, courtNumber: courtNum });
      if (wouldBeRef.substitutionNotes && wouldBeRef.substitutionNotes.length > 0) {
        setDialog({
          title: "審判の割当を確認してください",
          message: (
            <div className="text-left space-y-2">
              <div className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm space-y-1">
                {wouldBeRef.substitutionNotes.map((note, i) => <div key={i}>⚠️ {note}</div>)}
              </div>
              <div className="text-sm text-gray-600">このままコートへ配置してよろしいですか？</div>
            </div>
          ),
          confirmText: "配置する",
          confirmBg: "bg-orange-500 hover:bg-orange-600",
          onConfirm: () => { setDialog(null); performMove(); },
          onClose: () => setDialog(null)
        });
        return;
      }
    }

    performMove();

    async function performMove() {
      const displacedIds = [];
      const displacedCompleted = [];
      let updatedTargetMatch = null;
      const updated = matches.map(m => {
        if (Number(m.courtNumber) === Number(courtNum) && m.id !== matchId) {
          // 完了済みの試合がそのコートに残ったままだと、「そのコートの最新完了試合」の判定が
          // 試合順（matchOrder）頼みになり、実際の完了順と食い違って古い審判予定が復活してしまう。
          // 新しい試合を配置する時点でコート番号を外し、そのコートの完了履歴を1件に保つ
          if (m.status === 'completed') {
            displacedCompleted.push(m.id);
            return { ...m, courtNumber: null };
          }
          displacedIds.push(m.id);
          return { ...m, courtNumber: null, status: 'waiting' };
        }
        if (m.id === matchId) {
          const isScored = m.team1Score !== null && m.team2Score !== null;
          updatedTargetMatch = {
            ...m,
            courtNumber: courtNum,
            status: courtNum ? (isScored ? 'completed' : 'calling') : (isScored ? 'completed' : 'waiting')
          };
          return updatedTargetMatch;
        }
        return m;
      });

      setMatches(updated);

      // タップで選択中の試合をドラッグでも移動できてしまうため、移動できたらタップ選択を解除する。
      // 解除し忘れると、実際は配置済みなのに「選択中」バナーが残り続けてドラッグが失敗したように見えてしまう
      setTapMoveSelection(prev => (prev && prev.kind === 'match' && prev.id === matchId) ? null : prev);

      // 実際にコートへ割り当てられた瞬間の審判割り当てを固定する。押し出された試合のロックは解除し、再割当時に再計算させる
      if (courtNum !== null && updatedTargetMatch) {
        const decidedRef = getRefereeForMatch(updatedTargetMatch);
        setLockedReferees(prev => {
          const next = { ...prev, [matchId]: decidedRef };
          displacedIds.forEach(id => delete next[id]);
          return next;
        });
      }

      if (isSupabaseConfigured) {
        if (courtNum !== null && currentActiveOnCourt && currentActiveOnCourt.status !== 'completed') {
          await supabase.from('matches').update({ court_number: null, status: 'waiting' }).eq('id', currentActiveOnCourt.id);
        }
        for (const id of displacedCompleted) {
          await supabase.from('matches').update({ court_number: null }).eq('id', id);
        }
        await supabase.from('matches').update({
          court_number: courtNum,
          status: courtNum ? ((targetMatch.team1Score !== null && targetMatch.team2Score !== null) ? 'completed' : 'calling') : ((targetMatch.team1Score !== null && targetMatch.team2Score !== null) ? 'completed' : 'waiting')
        }).eq('id', matchId);
      }
    }
  };

  const handleCourtDrop = async (e, courtNum) => {
    e.preventDefault();
    const matchId = e.dataTransfer.getData('text/match-id');
    if (!matchId) return;
    await moveMatchToCourt(matchId, courtNum);
  };

  // 空きコートのみタップ配置に対応（配置済みコートの入れ替えは従来通りドラッグ操作を使用）
  const handleCourtZoneTap = (courtNum) => async () => {
    if (!tapMoveSelection || tapMoveSelection.kind !== 'match') return;
    const matchId = tapMoveSelection.id;
    setTapMoveSelection(null);
    await moveMatchToCourt(matchId, courtNum);
  };

  const handleMatchStatusChange = async (matchId, newStatus) => {
    const updated = matches.map(m => m.id === matchId ? { ...m, status: newStatus } : m);
    setMatches(updated);
    if (isSupabaseConfigured) {
      await supabase.from('matches').update({ status: newStatus }).eq('id', matchId);
    }
  };

  const moveEntryToTournamentSlot = async (entryId, position) => {
    if (!entryId) return;

    // 「予選順位から自動反映」ボタンと同様、予選リーグが全試合終了していない組は
    // 手動のドラッグ／タップでも決勝トーナメントへ配置できないようにする
    const targetEntry = entries.find(ent => ent.id === entryId);
    if (targetEntry) {
      const classLeagueMatches = matches.filter(m => m.cls === targetEntry.cls && m.matchType === 'league');
      const isLeagueFinished = classLeagueMatches.length > 0 && classLeagueMatches.every(m => m.status === 'completed');
      if (!isLeagueFinished) {
        setDialog({
          title: "配置不可",
          message: `【${targetEntry.cls}】の予選リーグがまだ終了していないため、決勝トーナメントへ配置できません。先に予選リーグの全試合のスコア入力を完了させてください。`,
          onClose: () => setDialog(null)
        });
        return;
      }
    }

    setEntries(entries.map(ent => {
      if (ent.id === entryId) return { ...ent, tournamentPosition: position };
      if (ent.tournamentPosition === position) return { ...ent, tournamentPosition: null };
      return ent;
    }));

    // タップで選択中のエントリーをドラッグでも移動できてしまうため、移動できたらタップ選択を解除する
    setTapMoveSelection(prev => (prev && prev.kind === 'entry' && prev.id === entryId) ? null : prev);

    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ tournamentposition: null }).eq('tournamentposition', position).eq('cls', drawClass);
      await supabase.from('entries').update({ tournamentposition: position }).eq('id', entryId);
    }
  };

  const handleTournamentDrop = async (e, position) => {
    e.preventDefault();
    const entryId = e.dataTransfer.getData('text/plain');
    if (!entryId) return;
    await moveEntryToTournamentSlot(entryId, position);
  };

  const clearEntryTournamentPosition = async (entryId) => {
    if (!entryId) return;
    setEntries(entries.map(ent => ent.id === entryId ? { ...ent, tournamentPosition: null } : ent));
    if (isSupabaseConfigured) {
      await supabase.from('entries').update({ tournamentposition: null }).eq('id', entryId);
    }
  };

  const handleRemoveTournamentPosition = async (e) => {
    e.preventDefault();
    const entryId = e.dataTransfer.getData('text/plain');
    if (!entryId) return;
    await clearEntryTournamentPosition(entryId);
  };

  const handleUnassignZoneTap = async () => {
    if (!tapMoveSelection || tapMoveSelection.kind !== 'entry') return;
    const entryId = tapMoveSelection.id;
    setTapMoveSelection(null);
    await clearEntryTournamentPosition(entryId);
  };

  // トーナメント枠タップ時：空き枠なら選択中の組を配置、配置済みなら選択トグル（次ラウンドへ進出させる際に再選択して使う）
  const handleTournamentSlotTap = (slot, occupant) => async (e) => {
    if (occupant) {
      toggleTapSelect('entry', occupant.id, getTeamNameWithClub(occupant.id))(e);
      return;
    }
    if (!tapMoveSelection || tapMoveSelection.kind !== 'entry') return;
    const entryId = tapMoveSelection.id;
    setTapMoveSelection(null);
    await moveEntryToTournamentSlot(entryId, slot);
  };

  const handleAutoDraw = async () => {
    const checkedInEntries = entries.filter(e => e.cls === drawClass && e.checkedIn);
    if (checkedInEntries.length === 0) {
      setDialog({ title: "ドロップ不可", message: `${drawClass} で受付済の組がありません。先に「受付処理」タブで受付を完了させてください。`, onClose: () => setDialog(null) });
      return;
    }
    const shuffled = [...checkedInEntries].sort(() => Math.random() - 0.5);
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const desiredGroupCount = Math.max(3, Math.ceil(shuffled.length / 4));
    // 組数が少ないクラスでは、1グループ2組未満にならないようグループ数を減らす
    const groupCount = Math.max(1, Math.min(desiredGroupCount, Math.floor(shuffled.length / 2)));
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

  const generateClassLeagueMatches = async (targetCls, currentEntriesList) => {
    setLastCourtReferees({});
    setLockedReferees({});
    const activeEntries = currentEntriesList || entries;
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const clsEntries = activeEntries.filter(e => e.cls === targetCls && e.checkedIn);
    const groupMatchesMap = {};
    let maxGroupMatches = 0;

    groups.forEach(groupName => {
      const groupTeams = clsEntries.filter(e => e.group === groupName);
      groupMatchesMap[groupName] = [];
      if (groupTeams.length >= 2) {
        for (let i = 0; i < groupTeams.length; i++) {
          for (let j = i + 1; j < groupTeams.length; j++) {
            groupMatchesMap[groupName].push({
              cls: targetCls,
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

    const newClassMatches = [];
    let orderCounter = 1;
    const dbInserts = [];
    let totalGenerated = 0;

    for (let round = 0; round < maxGroupMatches; round++) {
      groups.forEach(groupName => {
        if (groupMatchesMap[groupName] && groupMatchesMap[groupName][round]) {
          totalGenerated++;
          const m = groupMatchesMap[groupName][round];
          const matchObj = {
            id: `M-${targetCls}-${m.group_name}-${m.team1_id}-${m.team2_id}`,
            cls: targetCls,
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
          newClassMatches.push({
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
        }
      });
    }

    // 予選をやり直す場合、そのクラスの旧・決勝トーナメント対戦カードとシード配置はもう無効なので、
    // 古い予選結果を引きずって決勝ブラケットに残り続けないよう合わせて破棄する
    const otherMatches = matches.filter(m => !(m.cls === targetCls && (m.matchType === 'league' || m.matchType === 'tournament')));
    const updatedMatches = [...otherMatches, ...newClassMatches];
    setMatches(updatedMatches);
    setEntries(prev => prev.map(e => e.cls === targetCls ? { ...e, tournamentPosition: null } : e));

    if (isSupabaseConfigured) {
      await supabase.from('matches').delete().eq('cls', targetCls).in('match_type', ['league', 'tournament']);
      if (dbInserts.length > 0) {
        await supabase.from('matches').insert(dbInserts);
      }
      await supabase.from('entries').update({ tournamentposition: null }).eq('cls', targetCls);
    }
    return totalGenerated;
  };

  const generateLeagueMatches = async (targetCls, currentEntriesList) => {
    return await generateClassLeagueMatches(targetCls, currentEntriesList);
  };

  const handleAutoDrawTournament = async () => {
    const classLeagueMatches = matches.filter(m => m.cls === drawClass && m.matchType === 'league');
    
    if (classLeagueMatches.length === 0) {
      setDialog({
        title: "自動反映不可",
        message: `【${drawClass}】の予選リーグ対戦カードが生成されていません。先に「予選リーグ」タブで対戦カードを生成してください。`,
        onClose: () => setDialog(null)
      });
      return;
    }

    const unfinishedMatches = classLeagueMatches.filter(m => m.status !== 'completed');
    if (unfinishedMatches.length > 0) {
      setDialog({
        title: "予選未終了",
        message: `【${drawClass}】の予選リーグ試合（未消化 ${unfinishedMatches.length} 試合）がまだすべて終了していません。全予選試合のスコア入力を完了させてから実行してください。`,
        onClose: () => setDialog(null)
      });
      return;
    }

    const checkedInEntries = entries.filter(e => e.cls === drawClass && e.checkedIn);
    if (checkedInEntries.length === 0) {
      setDialog({ title: "ドロップ不可", message: `${drawClass} で受付済の組がありません。`, onClose: () => setDialog(null) });
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
      setDialog({ title: "順位反映完了", message: `【${drawClass}】の全予選結果に基づき、${assignedCount} 組を決勝トーナメント枠に割り当てました。手動で枠を変更することも可能です。`, onClose: () => setDialog(null) });
    } else {
      setDialog({ title: "完了", message: "予選グループ数に応じたトーナメント枠を設定しました。", onClose: () => setDialog(null) });
    }
  };

  // スロット番号からラウンド情報を求める（renderTournamentTreeの採番方式と対応させる）
  // レベル0のスロットは1..N、レベルL(L>=1)のスロットは L*100 + インデックス+1
  const getTournamentSlotInfo = (slot) => {
    const level = Math.floor(slot / 100);
    const idx = slot - level * 100 - 1;
    const pairIndex = Math.floor(idx / 2);
    const siblingIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
    return {
      level,
      nextSlot: (level + 1) * 100 + pairIndex + 1,
      siblingSlot: level * 100 + siblingIdx + 1
    };
  };

  const tournamentRoundLabel = (level, slotCount) => {
    const totalLevels = Math.log2(slotCount);
    const remaining = totalLevels - level;
    if (remaining <= 1) return '決勝';
    if (remaining === 2) return '準決勝';
    if (remaining === 3) return '準々決勝';
    return `${level + 1}回戦`;
  };

  // 決勝トーナメントの対戦カードを生成する。両者揃った枠は試合を作成し、
  // 片方だけ埋まっている枠（不戦勝）はもう一方の枠へ自動的に勝ち上がらせる
  const generateTournamentMatches = async (cls) => {
    const slotCount = getTournamentSlotCount(cls);
    if (slotCount < 2) {
      setDialog({ title: "生成不可", message: `【${cls}】は決勝トーナメント枠が設定されていません。`, onClose: () => setDialog(null) });
      return;
    }

    let workingEntries = entries.map(e => ({ ...e }));
    const newMatches = [];
    const advancedUpdates = [];
    let createdCount = 0;

    let levelSize = slotCount;
    let level = 0;
    while (levelSize >= 2) {
      for (let i = 0; i < levelSize; i += 2) {
        const slotA = level * 100 + i + 1;
        const slotB = level * 100 + i + 2;
        const entA = workingEntries.find(e => e.cls === cls && e.tournamentPosition === slotA);
        const entB = workingEntries.find(e => e.cls === cls && e.tournamentPosition === slotB);
        const { nextSlot } = getTournamentSlotInfo(slotA);

        if (entA && entB) {
          const matchId = `T-${cls}-${slotA}-${slotB}`;
          if (!matches.some(m => m.id === matchId)) {
            newMatches.push({
              id: matchId,
              cls,
              group: tournamentRoundLabel(level, slotCount),
              matchType: 'tournament',
              courtNumber: null,
              team1Id: entA.id,
              team2Id: entB.id,
              team1Score: null,
              team2Score: null,
              status: 'waiting',
              matchOrder: 10000 + slotA
            });
            createdCount++;
          }
        } else if (entA && !entB) {
          workingEntries = workingEntries.map(e => e.id === entA.id ? { ...e, tournamentPosition: nextSlot } : e);
          advancedUpdates.push({ id: entA.id, tournamentposition: nextSlot });
        } else if (!entA && entB) {
          workingEntries = workingEntries.map(e => e.id === entB.id ? { ...e, tournamentPosition: nextSlot } : e);
          advancedUpdates.push({ id: entB.id, tournamentposition: nextSlot });
        }
      }
      levelSize = levelSize / 2;
      level++;
    }

    if (newMatches.length === 0 && advancedUpdates.length === 0) {
      setDialog({ title: "生成対象なし", message: `【${cls}】には新たに生成できる対戦カードがありません。両者揃っている枠がないか、既に生成済みです。`, onClose: () => setDialog(null) });
      return;
    }

    if (advancedUpdates.length > 0) setEntries(workingEntries);
    if (newMatches.length > 0) setMatches(prev => [...prev, ...newMatches]);

    if (isSupabaseConfigured) {
      await Promise.all(advancedUpdates.map(u => supabase.from('entries').update({ tournamentposition: u.tournamentposition }).eq('id', u.id)));
      if (newMatches.length > 0) {
        await supabase.from('matches').insert(newMatches.map(m => ({
          id: m.id, cls: m.cls, group_name: m.group, match_type: m.matchType, court_number: m.courtNumber,
          team1_id: m.team1Id, team2_id: m.team2Id, team1_score: m.team1Score, team2_score: m.team2Score,
          status: m.status, match_order: m.matchOrder
        })));
      }
    }

    const parts = [];
    if (createdCount > 0) parts.push(`対戦カード${createdCount}件を生成`);
    if (advancedUpdates.length > 0) parts.push(`不戦勝${advancedUpdates.length}件を自動で勝ち上がらせ`);
    setDialog({ title: "決勝トーナメント対戦カード生成完了", message: `【${cls}】: ${parts.join('、')}しました。`, onClose: () => setDialog(null) });
  };

  const handleEntrySubmit = async (e) => {
    e.preventDefault();
    const generatedPassword = Math.floor(1000 + Math.random() * 9000).toString();
    const feeCat = entryForm.feeCategory || '一般';

    const buildDbPayload = (id) => ({
      id,
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
    });

    let newId;

    if (isSupabaseConfigured) {
      // ローカルのentries stateだけを根拠に採番すると同時エントリー時にID重複が起こり得るため、
      // 挿入直前にDBへ最大IDを問い合わせ、一意制約違反（同時衝突）が起きた場合は採番し直す
      let lastError = null;
      let succeeded = false;
      for (let attempt = 0; attempt < 5 && !succeeded; attempt++) {
        const { data: latest } = await supabase.from('entries').select('id').order('id', { ascending: false }).limit(1);
        const currentMax = (latest && latest[0]) ? (parseInt(latest[0].id, 10) || 0) : 0;
        newId = (currentMax + 1).toString().padStart(4, '0');

        const { error } = await supabase.from('entries').insert([buildDbPayload(newId)]);
        if (!error) {
          succeeded = true;
        } else if (error.code === '23505') {
          lastError = error;
        } else {
          lastError = error;
          break;
        }
      }
      if (!succeeded) {
        console.error("Entry error:", lastError);
        setDialog({ title: "エラー", message: "保存に失敗しました。詳細: " + (lastError ? lastError.message : "IDの採番に失敗しました。時間をおいて再度お試しください。"), onClose: () => setDialog(null) });
        return;
      }
    } else {
      const maxId = entries.reduce((max, ent) => Math.max(max, parseInt(ent.id, 10) || 0), 0);
      newId = (maxId + 1).toString().padStart(4, '0');
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

  // スコア確定済（completed）の試合も、試合実績（スコア・結果）は保持したままコート解除できる
  const handleAssignCourt = async (matchId, courtNum) => {
    const targetMatch = matches.find(m => m.id === matchId);

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

    // コート解除時はロックを解除し、次に割り当てられた時点で審判を再計算させる
    if (courtNum === null) {
      setLockedReferees(prev => {
        const next = { ...prev };
        delete next[matchId];
        return next;
      });
    }

    if (isSupabaseConfigured) {
      if (courtNum !== null) {
        // スコア確定済（completed）の試合はDB上でも待機状態に巻き戻さない
        await supabase.from('matches').update({ court_number: null, status: 'waiting' }).eq('court_number', courtNum).neq('status', 'completed');
      }
      const isScored = targetMatch && targetMatch.team1Score !== null && targetMatch.team2Score !== null;
      await supabase.from('matches').update({ 
        court_number: courtNum, 
        status: courtNum ? (isScored ? 'completed' : 'calling') : (isScored ? 'completed' : 'waiting')
      }).eq('id', matchId);
    }
  };

  // 「スコア解除」ボタン処理（ステータスを in_progress に戻す）
  const handleResetScore = async (matchId) => {
    const targetMatch = matches.find(m => m.id === matchId);
    if (!targetMatch) return;

    // スコア解除時はコートに配置された状態で「スコア入力（in_progress）」に戻す
    const newStatus = targetMatch.courtNumber ? 'in_progress' : 'waiting';

    const updated = matches.map(m => m.id === matchId ? {
      ...m,
      team1Score: null,
      team2Score: null,
      status: newStatus
    } : m);
    setMatches(updated);

    if (isSupabaseConfigured) {
      await supabase.from('matches').update({
        team1_score: null,
        team2_score: null,
        status: newStatus
      }).eq('id', matchId);
    }

    if (targetMatch.courtNumber !== null) {
      setLastCourtReferees(prev => {
        const next = { ...prev };
        delete next[targetMatch.courtNumber];
        return next;
      });
    }

    setScoreModal(null);

    setDialog({
      title: "スコア解除完了",
      message: (
        <div className="text-left space-y-3">
           <div className="bg-amber-50 text-amber-800 p-3 rounded-lg font-bold text-sm flex items-center gap-2">
              <IconCheckCircle /> 試合結果（スコア）を解除し、スコア入力状態に戻しました。
           </div>
        </div>
      ),
      onClose: () => setDialog(null)
    });
  };

  const handleSaveScore = async (matchId, s1, s2) => {
    const targetMatch = matches.find(m => m.id === matchId);
    
    const isCleared = (s1 === 0 && s2 === 0);
    if (isCleared) {
      await handleResetScore(matchId);
      return;
    }

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
          mainId: winnerId,
          line: loserName,
          lineId: loserId
        }
      }));
    }

    // 決勝トーナメントの試合なら、勝ち組を次ラウンドの枠へ自動的に勝ち上がらせる
    if (targetMatch && targetMatch.matchType === 'tournament') {
      const winnerId = s1 >= s2 ? targetMatch.team1Id : targetMatch.team2Id;
      const winnerEntry = entries.find(e => e.id === winnerId);
      const slotCount = getTournamentSlotCount(targetMatch.cls);
      const totalLevels = Math.log2(slotCount);
      if (winnerEntry && winnerEntry.tournamentPosition != null) {
        const { level, nextSlot } = getTournamentSlotInfo(winnerEntry.tournamentPosition);
        if (level + 1 < totalLevels) {
          setEntries(prev => prev.map(e => e.id === winnerId ? { ...e, tournamentPosition: nextSlot } : e));
          if (isSupabaseConfigured) {
            await supabase.from('entries').update({ tournamentposition: nextSlot }).eq('id', winnerId);
          }
        }
      }
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
    const groupEntries = entries.filter(e => e.cls === cls && e.group === groupName && e.checkedIn);
    const groupMatches = matches.filter(m => m.cls === cls && m.group === groupName && m.status === 'completed');

    const stats = groupEntries.map(ent => {
      let wins = 0;
      let losses = 0;
      let pointsFor = 0;
      let pointsAgainst = 0;
      groupMatches.forEach(m => {
        if (m.team1Id === ent.id) {
          pointsFor += m.team1Score || 0;
          pointsAgainst += m.team2Score || 0;
          if (m.team1Score > m.team2Score) wins++;
          else if (m.team1Score < m.team2Score) losses++;
        } else if (m.team2Id === ent.id) {
          pointsFor += m.team2Score || 0;
          pointsAgainst += m.team1Score || 0;
          if (m.team2Score > m.team1Score) wins++;
          else if (m.team2Score < m.team1Score) losses++;
        }
      });
      return { ...ent, wins, losses, pointsFor, pointsAgainst, pointDiff: pointsFor - pointsAgainst };
    });

    // 勝ち数→得失点差→総得点→ID の順で決定的に順位付けする。
    // 勝ち数だけで比較すると同成績の組が並んだ場合の順序が取得タイミング依存になり、
    // 読み込むたびに決勝進出組が入れ替わってしまうことがあったため
    return stats.sort((a, b) =>
      b.wins - a.wins ||
      b.pointDiff - a.pointDiff ||
      b.pointsFor - a.pointsFor ||
      String(a.id).localeCompare(String(b.id))
    );
  };

  // 予選リーグの対戦カードが1件以上生成済み、かつ全試合が完了しているか
  const isLeagueComplete = (cls) => {
    const leagueMatches = matches.filter(m => m.cls === cls && m.matchType === 'league');
    return leagueMatches.length > 0 && leagueMatches.every(m => m.status === 'completed');
  };

  // 予選が全試合終了しているクラスについて、グループ順位が進出条件（上位1 or 2）に入っている組だけを返す。
  // 予選が終わっていない、または進出条件外の組は「決勝進出組」として扱わない
  const getTournamentQualifiedEntries = (cls) => {
    if (!isLeagueComplete(cls)) return [];
    const clsEntries = entries.filter(e => e.cls === cls && e.checkedIn);
    const activeGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].filter(g => clsEntries.some(e => e.group === g));
    const numPerGroup = (config.advancementCondition || 'top2') === 'top1' ? 1 : 2;
    const qualified = [];
    activeGroups.forEach(g => {
      // 予選順位・勝敗を画面表示でも使えるよう、進出組にはグループ内順位(groupRank)を付与しておく
      getGroupStandings(cls, g).slice(0, numPerGroup).forEach((s, idx) => {
        qualified.push({ ...s, groupRank: idx + 1 });
      });
    });
    return qualified;
  };

  // 決勝トーナメントの組数（受付済＋グループ数）に応じたブラケットサイズ（4 or 8）
  const getTournamentSlotCount = (cls) => {
    const clsEntries = entries.filter(e => e.cls === cls && e.checkedIn);
    if (clsEntries.length === 0) return 0;
    const activeGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].filter(g => clsEntries.some(e => e.group === g));
    return activeGroups.length <= 2 ? 4 : 8;
  };

  const filteredReceptionEntries = entries.filter(ent => {
    if (receptionClassFilter !== 'all' && ent.cls !== receptionClassFilter) return false;
    if (receptionSearchQuery) {
      const q = receptionSearchQuery.trim().toLowerCase();
      const haystack = [ent.id, ent.cls, ent.club, ent.p1Name, ent.p2Name].filter(Boolean).join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  // 予選リーグの残り試合数から、コート数・1試合平均時間をもとに終了予定時刻を試算する
  const simResult = (() => {
    const classes = config.classes || [];
    const classStats = classes.map(cls => {
      const count = entries.filter(e => e.cls === cls).length;
      const leagueMatches = matches.filter(m => m.cls === cls && m.matchType === 'league');
      const leagueTotal = leagueMatches.length;
      const leagueRemaining = leagueMatches.filter(m => m.status !== 'completed').length;
      const completedMatches = leagueTotal - leagueRemaining;

      // 決勝トーナメントの試合結果は現状データ保持していないため、常に未消化として見積もる
      const tournamentTotal = Math.max(getTournamentSlotCount(cls) - 1, 0);
      const tournamentRemaining = tournamentTotal;

      return {
        cls, count, leagueTotal, leagueRemaining, tournamentTotal, tournamentRemaining,
        completedMatches,
        remainingMatches: leagueRemaining + tournamentRemaining,
        totalMatches: leagueTotal + tournamentTotal
      };
    });

    const sum = (key) => classStats.reduce((acc, s) => acc + s[key], 0);
    const totalRemainingMatches = sum('remainingMatches');
    const courts = Math.max(config.courts || 1, 1);
    const avgDuration = config.avgMatchDuration || 15;
    const totalMinutes = Math.ceil((totalRemainingMatches * avgDuration) / courts);

    const [baseH, baseM] = (simCurrentTime || '08:50').split(':').map(n => parseInt(n, 10) || 0);
    const endTotalMin = baseH * 60 + baseM + totalMinutes;
    const endTimeStr = `${(Math.floor(endTotalMin / 60) % 24).toString().padStart(2, '0')}:${(endTotalMin % 60).toString().padStart(2, '0')}`;

    return {
      classStats,
      totalEntries: sum('count'),
      totalLeagueMatches: sum('leagueTotal'),
      totalLeagueRemaining: sum('leagueRemaining'),
      totalTournamentMatches: sum('tournamentTotal'),
      totalTournamentRemaining: sum('tournamentRemaining'),
      totalCompletedMatches: sum('completedMatches'),
      totalRemainingMatches,
      totalMatches: sum('totalMatches'),
      hours: Math.floor(totalMinutes / 60),
      minutes: totalMinutes % 60,
      endTimeStr
    };
  })();

  // 決勝トーナメント表を描画（editable=trueの場合はドラッグ＆ドロップで組を配置・進出させられる）
  const renderTournamentTree = (cls, editable) => {
    const slotCount = getTournamentSlotCount(cls);
    const getEntryAtSlot = (slot) => entries.find(e => e.cls === cls && e.tournamentPosition === slot);

    const renderSlot = (slot) => {
      const ent = getEntryAtSlot(slot);
      const isSelected = editable && ent && tapMoveSelection && tapMoveSelection.kind === 'entry' && tapMoveSelection.id === ent.id;
      const isDropTarget = editable && !ent && tapMoveSelection && tapMoveSelection.kind === 'entry';
      return (
        <div
          key={`slot-${slot}`}
          className={`border rounded-lg px-3 py-2 text-xs font-bold w-44 min-h-[44px] flex items-center ${ent ? 'bg-white border-[#2c5f4e] shadow-xs' : 'bg-gray-50 text-gray-300 border-dashed'} ${isSelected ? 'ring-2 ring-indigo-500' : ''} ${isDropTarget ? 'bg-indigo-50 border-indigo-400 text-indigo-400' : ''} ${editable ? 'cursor-pointer' : ''}`}
          onDragOver={editable ? handleDragOver : undefined}
          onDrop={editable ? (e) => handleTournamentDrop(e, slot) : undefined}
          onClick={editable ? handleTournamentSlotTap(slot, ent) : undefined}
        >
          <span
            className="truncate w-full"
            draggable={editable && !!ent}
            onDragStart={editable && ent ? (e) => handleDragStart(e, ent.id) : undefined}
          >
            {ent ? getTeamNameWithClub(ent.id) : (editable ? 'タップ/ドロップで配置' : '未定')}
          </span>
        </div>
      );
    };

    const rounds = [];
    let levelSize = slotCount;
    let level = 0;
    while (levelSize >= 2) {
      rounds.push(Array.from({ length: levelSize }, (_, i) => (level === 0 ? i + 1 : level * 100 + i + 1)));
      levelSize = levelSize / 2;
      level++;
    }

    const roundLabel = (idx) => {
      const remaining = rounds.length - idx;
      if (remaining === 1) return '決勝';
      if (remaining === 2) return '準決勝';
      if (remaining === 3) return '準々決勝';
      return `${idx + 1}回戦`;
    };

    return (
      <div className="flex gap-8 p-4 min-w-max">
        {rounds.map((slots, rIdx) => (
          <div key={`round-${rIdx}`} className="flex flex-col justify-center" style={{ gap: `${24 * Math.pow(2, rIdx)}px` }}>
            <div className="text-xs font-bold text-gray-500 text-center mb-1">{roundLabel(rIdx)}</div>
            {slots.map(slot => renderSlot(slot))}
          </div>
        ))}
      </div>
    );
  };

  const viewHome = (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* 修正: 「当日の進行状況・対戦表はこちら」を削除し、ボタン名を「当日の進行状況・対戦表」に変更 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 text-center border border-blue-200">
         <button onClick={() => setCurrentTab('dashboard')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-md flex items-center justify-center gap-2 mx-auto text-lg"><IconSmartphone /> 当日の進行状況・対戦表</button>
      </div>

      <div ref={measureTitleRef} className="bg-[#2c5f4e] text-white rounded-2xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
        <h1
          className="font-extrabold mb-4 tracking-wider relative z-10 leading-tight break-words"
          style={{ fontSize: `${titleFontSize}px` }}
        >
          {config.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 relative z-10">{config.date}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
          <button onClick={() => {setEditMode(false); setCurrentTab('entry');}} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-2 text-base"><IconUser /> 大会にエントリー</button>
          <button onClick={() => setCurrentTab('editLogin')} className="bg-white text-[#2c5f4e] hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg border-2 border-[#2c5f4e] flex items-center justify-center gap-2 text-base"><IconSettings /> 修正・取消</button>
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
                 <p className="text-[11px] text-gray-500 pt-0.5">※予選初戦は、同クラスの空いているペアが審判を担当します（グループは問いません）。</p>
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
            <span className="text-[11px] text-emerald-800 ml-2">（※予選初戦は同クラスの空きペア、必要に応じて他クラス応援依頼）</span>
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
                        <div className="flex items-center gap-2">
                           <span className="font-extrabold text-sm text-gray-700">第 {courtNum} コート</span>
                           {activeMatch && activeMatch.status !== 'calling' && (
                              <span className="text-red-600 font-bold text-xs">
                                 {activeMatch.status === 'completed' ? '試合済' : (activeMatch.status === 'recepted' ? 'コール済' : '試合中')}
                              </span>
                           )}
                        </div>

                        {activeMatch && (() => {
                           const ref = getRefereeForMatch(activeMatch);
                           const hasSub = ref.substitutionNotes && ref.substitutionNotes.length > 0;
                           return (
                              <div className="relative group inline-block">
                                 <span className={`text-[10px] px-2 py-0.5 rounded cursor-pointer font-bold shadow-xs transition-colors ${hasSub ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-[#2c5f4e] text-white hover:bg-[#1f4236]'}`}>
                                    審判 {hasSub ? '⚠️' : 'ℹ️'}
                                 </span>
                                 <div
                                   className="absolute right-0 hidden group-hover:block w-64 bg-slate-800 text-white text-[11px] p-2.5 rounded-lg shadow-2xl z-50 pointer-events-none transition-all"
                                   style={{ bottom: '100%', top: 'auto', marginBottom: '8px' }}
                                 >
                                    <div className="font-bold border-b border-slate-600 pb-1 mb-1.5 text-emerald-400 flex justify-between">
                                       <span>審判割り当て</span>
                                       <span className="text-[9px] text-slate-300">({activeMatch.cls})</span>
                                    </div>
                                    <div className="truncate my-0.5"><span className="text-gray-400 font-bold">主・副審:</span> {ref.main}</div>
                                    <div className="truncate my-0.5"><span className="text-gray-400 font-bold">線審:</span> {ref.line}</div>
                                    {hasSub && (
                                       <div className="mt-1.5 pt-1.5 border-t border-slate-600 text-amber-300 space-y-0.5">
                                          {ref.substitutionNotes.map((note, i) => <div key={i} className="leading-snug">⚠️ {note}</div>)}
                                       </div>
                                    )}
                                 </div>
                              </div>
                           );
                        })()}
                     </div>

                     <div className="p-4 flex flex-col min-h-32 justify-between text-center">
                       {activeMatch ? (
                          <div>
                             <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 inline-block ${badgeClass}`}>
                                ({activeMatch.cls}) {activeMatch.matchType === 'tournament' ? activeMatch.group : `グループ${activeMatch.group}`}・{statusLabel}
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
                      <table className="min-w-full w-max text-sm text-center border-collapse whitespace-nowrap">
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
            {isLeagueComplete(selectedClass) ? (
              <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
                 {renderTournamentTree(selectedClass, false)}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 py-16 text-center text-gray-400 font-bold">
                 予選リーグ終了後に表示されます
              </div>
            )}
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
        <button type="button" onClick={() => setCurrentTab('home')} className="w-full text-gray-500 hover:text-gray-800 font-bold py-2">キャンセル</button>
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
        <div className="w-full md:w-48 bg-gray-50 border-b md:border-b-0 md:border-r p-2 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
           <button onClick={() => setAdminTab('settings')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'settings' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>マスタ設定</button>
           <button onClick={() => setAdminTab('entries')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'entries' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>エントリー管理</button>
           <button onClick={() => setAdminTab('reception')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'reception' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>受付処理</button>
           <button onClick={() => setAdminTab('draw')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'draw' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>ドロー編成</button>
           <button onClick={() => setAdminTab('simulation')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'simulation' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>シミュレーション</button>
           <button onClick={() => setAdminTab('matches')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'matches' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>コート進行・スコア</button>
           <button onClick={() => setAdminTab('data')} className={`p-2 text-left rounded font-bold whitespace-nowrap shrink-0 ${adminTab === 'data' ? 'bg-[#2c5f4e] text-white' : 'hover:bg-gray-200'}`}>データ管理</button>
        </div>
        <div className="flex-1 p-6 bg-gray-50/50 min-w-0">
          
          {adminTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b pb-2 flex items-center justify-between gap-2">
                 <span className="flex items-center gap-2"><IconSettings /> 大会マスタ設定</span>
                 <button onClick={handleSaveSettings} className="px-5 py-2 bg-[#2c5f4e] hover:bg-[#1f4236] text-white font-bold rounded shadow flex items-center gap-2 text-sm">
                    <IconCheckCircle /> 設定を保存
                 </button>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2"><label className="block font-bold text-sm mb-1 text-gray-700">大会名</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.title} onChange={e=>setConfig({...config, title: e.target.value})} /></div>
                <div>
                  <label className="block font-bold text-sm mb-1 text-gray-700">開催日</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none"
                    value={dateToInputValue(parseJapaneseFullDate(config.date))}
                    onChange={e => setConfig({ ...config, date: formatJapaneseFullDate(inputValueToDate(e.target.value)) })}
                  />
                  {config.date && <p className="text-xs text-gray-400 mt-1">表示: {config.date}</p>}
                </div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">会場</label><input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.venue} onChange={e=>setConfig({...config, venue: e.target.value})} /></div>
                <div>
                  <label className="block font-bold text-sm mb-1 text-gray-700">申込締切</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none"
                    value={dateToInputValue(parseJapaneseMonthDay(config.deadline, (parseJapaneseFullDate(config.date) || new Date()).getFullYear()))}
                    onChange={e => setConfig({ ...config, deadline: formatJapaneseMonthDay(inputValueToDate(e.target.value)) })}
                  />
                  {config.deadline && <p className="text-xs text-gray-400 mt-1">表示: {config.deadline}</p>}
                </div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">コート数（面）</label><input type="number" min="1" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={config.courts} onChange={e=>setConfig({...config, courts: parseInt(e.target.value) || 1})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">開館時間</label><input type="time" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={formatHHMM(config.timeOpen)} onChange={e=>setConfig({...config, timeOpen: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">受付開始</label><input type="time" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={formatHHMM(config.timeReception)} onChange={e=>setConfig({...config, timeReception: e.target.value})} /></div>
                <div><label className="block font-bold text-sm mb-1 text-gray-700">試合開始</label><input type="time" className="w-full p-2 border rounded focus:ring-2 focus:ring-[#2c5f4e] outline-none" value={formatHHMM(config.timeStart)} onChange={e=>setConfig({...config, timeStart: e.target.value})} /></div>
                
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
            </div>
          )}
          
          {adminTab === 'entries' && (
            <div>
              <h3 className="text-xl font-bold mb-4">エントリー管理</h3>
              <div className="overflow-x-auto bg-white rounded border">
                <table className="min-w-full w-max text-sm text-left whitespace-nowrap">
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
                        <td className="p-3 flex gap-2 whitespace-nowrap">
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

              <div className="bg-white rounded border shadow-sm overflow-x-auto">
                 <table className="min-w-full w-max text-sm text-left whitespace-nowrap">
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

          {adminTab === 'draw' && (() => {
            const isDrawClassLeagueFinished = isLeagueComplete(drawClass);
            return (
            <div className="w-full overflow-hidden">
              <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2.5 rounded-lg mb-4 text-xs font-bold flex items-center justify-between">
                 <span>⚠️ ドロー編成は「受付処理」で受付済（済）になった組のみが表示・割り当て対象となります。</span>
                 <span className="bg-amber-200 text-amber-800 px-2 py-0.5 rounded font-mono">
                    {drawClass} 受付済: {entries.filter(e => e.cls === drawClass && e.checkedIn).length} / {entries.filter(e => e.cls === drawClass).length} 組
                 </span>
              </div>

              {drawType === 'tournament' && !isDrawClassLeagueFinished && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-2.5 rounded-lg mb-4 text-xs font-bold">
                   ⚠️ 【{drawClass}】の予選リーグがまだ終了していません。全試合終了後、決勝進出組が表示されます。
                </div>
              )}

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
                         const count = await generateClassLeagueMatches(drawClass);
                         if (count > 0) {
                           setDialog({ title: "対戦カード生成完了", message: `【${drawClass}】のグループ配置に基づき、対戦カード（全${count}試合）を更新・生成しました！`, onClose: () => setDialog(null) });
                         } else {
                           setDialog({ title: "対戦カードクリア", message: `【${drawClass}】のグループに2組以上配置されている組がないため、対戦カードをクリア（0試合）にしました。`, onClose: () => setDialog(null) });
                         }
                       }} 
                       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold shadow-sm flex items-center gap-1"
                     >
                        <IconRefresh /> 手動編成から対戦カード生成
                     </button>
                   </>
                 ) : (
                   <>
                     <button onClick={handleAutoDrawTournament} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold shadow-sm">
                        予選順位からトーナメント位置を自動初期反映
                     </button>
                     <button onClick={() => generateTournamentMatches(drawClass)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-bold shadow-sm flex items-center gap-1">
                        <IconRefresh /> 決勝トーナメント対戦カードを生成
                     </button>
                   </>
                 )}
              </div>

              {tapMoveSelection && (
                <div className="mb-4 bg-indigo-50 border border-indigo-300 text-indigo-900 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between gap-3">
                   <span>「{tapMoveSelection.label}」を選択中 — 配置先をタップしてください</span>
                   <button onClick={() => setTapMoveSelection(null)} className="text-xs bg-white border border-indigo-300 px-2 py-1 rounded shadow-xs">キャンセル</button>
                </div>
              )}
              {drawType === 'league' ? (
                <div className="flex gap-4 overflow-x-auto pb-6 w-full cursor-grab active:cursor-grabbing">
                   {['未割り当て', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(groupName => {
                      const groupTeams = entries.filter(e => e.cls === drawClass && e.checkedIn && e.group === groupName);
                      if (groupName !== '未割り当て' && groupTeams.length === 0 && !['A', 'B', 'C'].includes(groupName)) {
                        return null;
                      }
                      const isDropTarget = tapMoveSelection && tapMoveSelection.kind === 'entry';
                      return (
                        <div
                          key={`admin-group-${groupName}`}
                          className={`min-w-[260px] max-w-[260px] rounded-lg p-3 border-2 border-dashed flex-shrink-0 ${isDropTarget ? 'bg-indigo-50 border-indigo-400' : 'bg-gray-100 border-gray-300'}`}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, groupName)}
                          onClick={handleGroupZoneTap(groupName)}
                        >
                           <h4 className="font-bold mb-3 border-b-2 pb-2 flex justify-between items-center">
                              <span>{groupName === '未割り当て' ? '未割り当て (受付済)' : `グループ ${groupName}`}</span>
                              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full font-normal text-gray-600">{groupTeams.length}組</span>
                           </h4>
                           <div className="space-y-2 max-h-[450px] overflow-y-auto pr-1">
                              {groupTeams.map(ent => {
                                const isSelected = tapMoveSelection && tapMoveSelection.kind === 'entry' && tapMoveSelection.id === ent.id;
                                return (
                                 <div
                                   key={ent.id}
                                   draggable
                                   onDragStart={(e) => handleDragStart(e, ent.id)}
                                   onClick={toggleTapSelect('entry', ent.id, getTeamNameWithClub(ent.id))}
                                   className={`bg-white p-3 rounded shadow-sm border cursor-pointer sm:cursor-move text-sm font-bold hover:border-[#2c5f4e] transition-colors ${isSelected ? 'ring-2 ring-indigo-500 border-indigo-500' : ''}`}
                                 >
                                    <div className="text-xs text-gray-400 font-mono mb-1">{ent.id}</div>
                                    <div>{getTeamNameWithClub(ent.id)}</div>
                                 </div>
                                );
                              })}
                              {groupTeams.length === 0 && (
                                <div className="text-xs text-gray-400 text-center py-8">ここにドロップ、またはタップで配置</div>
                              )}
                           </div>
                        </div>
                      );
                   })}
                </div>
              ) : (
                <div className="flex gap-6">
                   <div
                     className={`w-1/3 rounded-lg p-3 border-2 border-dashed ${tapMoveSelection && tapMoveSelection.kind === 'entry' ? 'bg-orange-50 border-orange-400' : 'bg-gray-100 border-gray-300'}`}
                     onDragOver={handleDragOver}
                     onDrop={handleRemoveTournamentPosition}
                     onClick={handleUnassignZoneTap}
                   >
                      <h4 className="font-bold mb-3 border-b-2 pb-2">未配置 / 決勝進出組</h4>
                      <div className="space-y-2 max-h-[500px] overflow-y-auto">
                         {getTournamentQualifiedEntries(drawClass).filter(e => !e.tournamentPosition).map(ent => {
                           const isSelected = tapMoveSelection && tapMoveSelection.kind === 'entry' && tapMoveSelection.id === ent.id;
                           return (
                            <div
                              key={ent.id}
                              draggable
                              onDragStart={(e) => handleDragStart(e, ent.id)}
                              onClick={toggleTapSelect('entry', ent.id, getTeamNameWithClub(ent.id))}
                              className={`bg-white p-3 rounded shadow-sm border text-sm font-bold cursor-pointer sm:cursor-move hover:border-orange-500 ${isSelected ? 'ring-2 ring-orange-500 border-orange-500' : ''}`}
                            >
                               <div className="flex justify-between items-center mb-1">
                                  <span className="text-xs text-gray-400 font-mono">{ent.id}</span>
                                  <span className="text-[11px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">
                                     グループ{ent.group} {ent.groupRank}位・{ent.wins}勝{ent.losses}敗
                                  </span>
                               </div>
                               <div>{getTeamNameWithClub(ent.id)}</div>
                            </div>
                           );
                         })}
                         {isDrawClassLeagueFinished && getTournamentQualifiedEntries(drawClass).filter(e => !e.tournamentPosition).length === 0 && (
                            <div className="text-xs text-gray-400 text-center py-8">決勝進出組はすべて配置済みです</div>
                         )}
                      </div>
                   </div>
                   <div className="w-2/3 bg-gray-50 rounded-lg border overflow-x-auto relative p-4">
                      {renderTournamentTree(drawClass, true)}
                   </div>
                </div>
              )}
            </div>
            );
          })()}

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
                    <table className="min-w-full w-max text-xs text-center border-collapse whitespace-nowrap">
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
               </div>

               {tapMoveSelection && tapMoveSelection.kind === 'match' && (
                 <div className="mb-4 bg-indigo-50 border border-indigo-300 text-indigo-900 px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between gap-3">
                    <span>「{tapMoveSelection.label}」を選択中 — 配置先の空きコートをタップしてください</span>
                    <button onClick={() => setTapMoveSelection(null)} className="text-xs bg-white border border-indigo-300 px-2 py-1 rounded shadow-xs">キャンセル</button>
                 </div>
               )}

               <div className="mb-8">
                  <h4 className="font-bold text-sm text-gray-700 mb-3 border-l-4 border-[#2c5f4e] pl-2">🏸 コート配置状況 (空きコートにカードをドロップ、またはタップで配置)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

                        const isDropTarget = !activeMatch && tapMoveSelection && tapMoveSelection.kind === 'match';
                        return (
                           <div
                              key={`court-card-${courtNum}`}
                              className={`rounded-xl border-2 p-3 transition-all min-h-[180px] flex flex-col justify-between ${cardBgClass} ${isDropTarget ? 'bg-indigo-50 border-indigo-400' : ''}`}
                              onDragOver={handleDragOver}
                              onDrop={(e) => handleCourtDrop(e, courtNum)}
                              onClick={!activeMatch ? handleCourtZoneTap(courtNum) : undefined}
                           >
                              <div className="flex justify-between items-center border-b pb-1 mb-2">
                                 <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-base text-gray-700">第 {courtNum} コート</span>
                                    {activeMatch && activeMatch.status !== 'calling' && (
                                       <span className="text-red-600 font-bold text-sm">
                                          {activeMatch.status === 'completed' ? '試合済' : (activeMatch.status === 'recepted' ? 'コール済' : '試合中')}
                                       </span>
                                    )}
                                 </div>

                                 {activeMatch && (() => {
                                    const ref = getRefereeForMatch(activeMatch);
                                    const hasSub = ref.substitutionNotes && ref.substitutionNotes.length > 0;
                                    return (
                                       <div className="relative group inline-block">
                                          <span className={`text-xs px-2 py-0.5 rounded cursor-pointer font-bold shadow-xs transition-colors ${hasSub ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-[#2c5f4e] text-white hover:bg-[#1f4236]'}`}>
                                             審判 {hasSub ? '⚠️' : 'ℹ️'}
                                          </span>
                                          <div
                                            className="absolute right-0 hidden group-hover:block w-64 bg-slate-800 text-white text-[11px] p-2.5 rounded-lg shadow-2xl z-50 pointer-events-none transition-all"
                                            style={{ bottom: '100%', top: 'auto', marginBottom: '8px' }}
                                          >
                                             <div className="font-bold border-b border-slate-600 pb-1 mb-1.5 text-emerald-400 flex justify-between">
                                                <span>審判割り当て</span>
                                                <span className="text-[9px] text-slate-300">({activeMatch.cls})</span>
                                             </div>
                                             <div className="truncate my-0.5"><span className="text-gray-400 font-bold">主・副審:</span> {ref.main}</div>
                                             <div className="truncate my-0.5"><span className="text-gray-400 font-bold">線審:</span> {ref.line}</div>
                                             {hasSub && (
                                                <div className="mt-1.5 pt-1.5 border-t border-slate-600 text-amber-300 space-y-0.5">
                                                   {ref.substitutionNotes.map((note, i) => <div key={i} className="leading-snug">⚠️ {note}</div>)}
                                                </div>
                                             )}
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
                                    <div className="text-xs font-bold text-gray-500 mb-1">({activeMatch.cls}) {activeMatch.matchType === 'tournament' ? activeMatch.group : `グループ${activeMatch.group}`}</div>
                                    <div className="font-bold text-base truncate">{getTeamNameWithClub(activeMatch.team1Id)}</div>

                                    <div className="text-sm text-center font-bold my-1">
                                       {activeMatch.status === 'completed' ? (
                                          <span className="text-green-700 bg-green-100 px-2 py-0.5 rounded font-extrabold">
                                             {activeMatch.team1Score} - {activeMatch.team2Score}
                                          </span>
                                       ) : (
                                          <span className="text-gray-400 text-xs">vs</span>
                                       )}
                                    </div>

                                    <div className="font-bold text-base truncate">{getTeamNameWithClub(activeMatch.team2Id)}</div>
                                    
                                    <div className="mt-3 pt-2 border-t flex flex-wrap justify-between gap-1 items-center">
                                       <button
                                         onClick={() => handleAssignCourt(activeMatch.id, null)}
                                         className="text-xs text-red-500 hover:underline font-bold"
                                       >
                                          コート解除
                                       </button>

                                       {activeMatch.status === 'calling' && (
                                          <button
                                            onClick={() => handleMatchStatusChange(activeMatch.id, 'recepted')}
                                            className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             コール
                                          </button>
                                       )}

                                       {activeMatch.status === 'recepted' && (
                                          <button
                                            onClick={() => handleMatchStatusChange(activeMatch.id, 'in_progress')}
                                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             試合受付
                                          </button>
                                       )}

                                       {activeMatch.status === 'in_progress' && (
                                          <button
                                            onClick={() => setScoreModal({ match: activeMatch, s1: activeMatch.team1Score || 0, s2: activeMatch.team2Score || 0 })}
                                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             スコア入力
                                          </button>
                                       )}

                                       {activeMatch.status === 'completed' && (
                                          <button
                                            onClick={() => setScoreModal({ match: activeMatch, s1: activeMatch.team1Score || 0, s2: activeMatch.team2Score || 0 })}
                                            className="text-xs bg-green-600 hover:bg-green-700 text-white font-bold px-2.5 py-1 rounded shadow-xs"
                                          >
                                             スコア修正
                                          </button>
                                       )}
                                    </div>
                                 </div>
                              ) : (
                                 <div className="text-center text-sm text-gray-400 py-6 font-medium">
                                    ここに試合をドロップ、またはタップで配置
                                 </div>
                              )}
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-3 border-l-4 border-blue-500 pl-2">📋 優先対戦リスト (待機中の試合)</h4>
                  <div
                    className="bg-white rounded-xl border p-4 shadow-sm max-h-[500px] overflow-y-auto"
                    onDragOver={(e) => {
                      const container = e.currentTarget;
                      const rect = container.getBoundingClientRect();
                      const edge = 48;
                      if (e.clientY - rect.top < edge) {
                        container.scrollTop -= 18;
                      } else if (rect.bottom - e.clientY < edge) {
                        container.scrollTop += 18;
                      }
                    }}
                  >
                     {getSortedWaitingMatches().length > 0 ? (
                        <div className="grid grid-cols-1 gap-3">
                           {getSortedWaitingMatches().map((m, displayIndex) => {
                              const busyMap = getBusyTeamDetails();
                              const team1Busy = busyMap.get(String(m.team1Id));
                              const team2Busy = busyMap.get(String(m.team2Id));
                              const isAnyBusy = !!(team1Busy || team2Busy);
                              const busyShortLabel = (busy) => busy ? (busy.role === '試合進行中' ? '試合' : '審判') : null;
                              const busyTextClass = (busy) => busy ? (busy.role === '試合進行中' ? 'text-red-500 line-through' : 'text-blue-600 line-through') : 'text-gray-800';
                              const busyBadgeClass = (busy) => busy && busy.role === '試合進行中' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700';

                              // ブロックはしないが、次審判予定として青色で情報表示する
                              const predictedMap = getPredictedRefereeDetails();
                              const team1Predicted = !team1Busy ? predictedMap.get(String(m.team1Id)) : null;
                              const team2Predicted = !team2Busy ? predictedMap.get(String(m.team2Id)) : null;

                              const isSelected = tapMoveSelection && tapMoveSelection.kind === 'match' && tapMoveSelection.id === m.id;
                              return (
                                <div
                                  key={m.id}
                                  draggable={!isAnyBusy}
                                  onDragStart={(e) => !isAnyBusy && handleMatchDragStart(e, m.id)}
                                  onClick={!isAnyBusy ? toggleTapSelect('match', m.id, `${getTeamNameWithClub(m.team1Id)} vs ${getTeamNameWithClub(m.team2Id)}`) : undefined}
                                  className={`border p-2.5 rounded-lg shadow-xs transition-all ${isAnyBusy ? 'bg-gray-100 opacity-60 cursor-not-allowed border-gray-300' : 'bg-gray-50 hover:border-blue-400 cursor-pointer sm:cursor-move hover:shadow-sm'} ${isSelected ? 'ring-2 ring-indigo-500 border-indigo-500' : ''}`}
                                >
                                   <div className="flex justify-between items-center mb-1">
                                      <span className="text-[10px] font-mono font-bold bg-gray-200 px-1.5 py-0.5 rounded text-gray-600">順序 {displayIndex + 1}</span>
                                      <span className="text-xs font-bold text-blue-800">({m.cls}) {m.matchType === 'tournament' ? m.group : `グループ${m.group}`}</span>
                                   </div>
                                   <div className="grid items-center gap-x-2" style={{ gridTemplateColumns: 'minmax(0,1fr) 5.5rem 1.2rem minmax(0,1fr) 5.5rem' }}>
                                      <div className={`font-bold text-base truncate no-underline-children ${team1Predicted ? 'text-emerald-600' : busyTextClass(team1Busy)}`}>
                                         {getTeamNameWithClub(m.team1Id)}
                                      </div>
                                      <div className="flex justify-center">
                                         {team1Busy && <span className={`text-xs no-underline px-1.5 py-1 rounded font-bold whitespace-nowrap ${busyBadgeClass(team1Busy)}`}>{busyShortLabel(team1Busy)}(第{team1Busy.court}C)</span>}
                                         {team1Predicted && <span className="text-xs px-1.5 py-1 rounded font-bold whitespace-nowrap bg-emerald-100 text-emerald-700">次審判予定(第{team1Predicted.court}C)</span>}
                                      </div>
                                      <span className="text-xs text-gray-400 font-bold text-center">vs</span>
                                      <div className={`font-bold text-base truncate ${team2Predicted ? 'text-emerald-600' : busyTextClass(team2Busy)}`}>
                                         {getTeamNameWithClub(m.team2Id)}
                                      </div>
                                      <div className="flex justify-center">
                                         {team2Busy && <span className={`text-xs no-underline px-1.5 py-1 rounded font-bold whitespace-nowrap ${busyBadgeClass(team2Busy)}`}>{busyShortLabel(team2Busy)}(第{team2Busy.court}C)</span>}
                                         {team2Predicted && <span className="text-xs px-1.5 py-1 rounded font-bold whitespace-nowrap bg-emerald-100 text-emerald-700">次審判予定(第{team2Predicted.court}C)</span>}
                                      </div>
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
            <div className="space-y-8">
              <h3 className="text-3xl font-extrabold border-b pb-3 flex items-center gap-2 text-slate-800">
                 <IconDatabase /> データ管理
              </h3>

              <div className="bg-white border-2 rounded-xl p-6 shadow-sm space-y-8">
                 {/* 1. クラス別テスト自動エントリー生成 */}
                 <div>
                    <h4 className="font-extrabold text-xl text-gray-800 mb-1 flex items-center gap-2">
                       ⚙️ テスト用自動エントリー生成 (クラス別)
                    </h4>
                    <p className="text-base text-gray-600 font-medium mb-1">
                       各クラスごとに指定した人数のテストエントリーを自動生成してデータベースに登録します。
                    </p>
                    <p className="text-sm font-bold text-red-600 mb-4 bg-red-50 p-2.5 rounded border border-red-200">
                       ⚠️ 注意: テストデータを生成すると、現在のエントリーおよび試合結果データは一度すべて自動的にクリア（初期化）されます。
                    </p>
                    <div className="space-y-4 bg-gray-50 p-5 rounded-lg border">
                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {config.classes.map(cls => (
                             <div key={`test-gen-${cls}`} className="bg-white p-3.5 rounded-lg border flex flex-col items-center shadow-xs">
                                <span className="font-bold text-base text-[#2c5f4e] mb-1.5">{cls}</span>
                                <div className="flex items-center gap-1.5">
                                   <input 
                                     type="number" 
                                     min="0" 
                                     max="50"
                                     className="w-20 p-2 border-2 border-gray-300 rounded text-center text-xl font-extrabold bg-white focus:ring-2 focus:ring-[#2c5f4e] outline-none"
                                     value={testGenCounts[cls] !== undefined ? testGenCounts[cls] : 12}
                                     onChange={e => setTestGenCounts({ ...testGenCounts, [cls]: parseInt(e.target.value) || 0 })}
                                   />
                                   <span className="text-base font-bold text-gray-700">組</span>
                                </div>
                             </div>
                          ))}
                       </div>
                       <div className="flex justify-end pt-2">
                          <button 
                            onClick={handleGenerateTestData}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-6 py-3 rounded-lg shadow-md flex items-center gap-2 transition-colors"
                          >
                             <IconPlus /> テストデータ生成実行
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* 2. データの退避・復元 (ローカル) */}
                 <div className="border-t-2 pt-6">
                    <h4 className="font-extrabold text-xl text-gray-800 mb-2 flex items-center gap-2">
                       💾 データの退避・復元 (ローカルバックアップ)
                    </h4>
                    <p className="text-base text-gray-600 mb-4 font-medium">
                       現在の設定・エントリー・試合結果・審判割り当てデータをJSONファイルとしてパソコンに保存（退避）したり、保存したファイルから復元できます。
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-gray-50 p-5 rounded-lg border">
                       <div className="bg-white p-5 rounded-lg border shadow-xs space-y-3 flex flex-col justify-between">
                          <div>
                             <span className="font-extrabold text-base text-gray-800 block mb-1">① データをローカルに退避 (ダウンロード)</span>
                             <p className="text-sm text-gray-600 font-medium">現在の全状態をファイル（.json）として保存します。</p>
                          </div>
                          <button 
                            onClick={handleExportBackup}
                            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base py-3 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors"
                          >
                             📥 バックアップファイルを保存（退避）
                          </button>
                       </div>

                       <div className="bg-white p-5 rounded-lg border shadow-xs space-y-3 flex flex-col justify-between">
                          <div>
                             <span className="font-extrabold text-base text-gray-800 block mb-1">② 保存ファイルから復元 (アップロード)</span>
                             <p className="text-sm text-gray-600 font-medium">退避したJSONファイルを読み込み、データを全上書き復元します。</p>
                          </div>
                          <label className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors">
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

                 {/* 3. 試合結果のみ削除 */}
                 <div className="border-t-2 pt-6">
                    <h4 className="font-extrabold text-xl text-amber-600 mb-2 flex items-center gap-2">
                       🔄 試合結果のみ初期化（削除）
                    </h4>
                    <p className="text-base text-gray-600 mb-4 font-medium">
                       エントリーデータ（登録組・グループ分け）は残したまま、「全試合結果・コート進行状態」と「決勝トーナメントの配置」を削除します。組み合わせをやり直したい時に使用してください。
                    </p>
                    <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <span className="text-base font-bold text-amber-800">⚠️ 削除実行後はデータを元に戻せません</span>
                       <button
                         onClick={handleDeleteMatchResultsOnly}
                         className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-base px-6 py-3 rounded-lg shadow-md flex items-center gap-2 whitespace-nowrap transition-colors"
                       >
                          <IconTrash /> 試合結果のみクリア
                       </button>
                    </div>
                 </div>

                 {/* 4. 全データ初期化（削除） */}
                 <div className="border-t-2 pt-6">
                    <h4 className="font-extrabold text-xl text-red-600 mb-2 flex items-center gap-2">
                       🗑️ 全データ初期化（削除）
                    </h4>
                    <p className="text-base text-gray-600 mb-4 font-medium">
                       現在登録されている「すべてのエントリーデータ」および「全試合結果・コート進行状態」を一括削除します。大会やり直し時やテスト終了時に使用してください。
                    </p>
                    <div className="bg-red-50 border-2 border-red-200 p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <span className="text-base font-bold text-red-800">⚠️ 削除実行後はデータを元に戻せません</span>
                       <button
                         onClick={handleDeleteAllEntries}
                         className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-6 py-3 rounded-lg shadow-md flex items-center gap-2 whitespace-nowrap transition-colors"
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
      {/* 修正: 右上の「エントリー」「修正・取消」ボタンを削除し、「管理」ボタンのみ配置 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-[#2c5f4e] text-lg flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab('home')}>
             <IconTrophy /> 大会運営ポータル
          </div>
          <div className="flex gap-2 md:gap-4">
             <button onClick={() => { if(isAdminLoggedIn) { setCurrentTab('admin'); } else { setCurrentTab('adminLogin'); } }} className="text-xs md:text-sm font-bold text-gray-600 hover:text-gray-900 px-3 py-2 flex items-center gap-1"><IconSettings /> 事務局操作</button>
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
              <p className="text-xs text-gray-500 text-center mb-6">({scoreModal.match.cls}) {scoreModal.match.matchType === 'tournament' ? scoreModal.match.group : `グループ${scoreModal.match.group}`}</p>

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

              <div className="flex gap-2 justify-between border-t pt-4">
                 {scoreModal.match.status === 'completed' || scoreModal.match.team1Score !== null ? (
                   <button 
                     type="button" 
                     onClick={() => handleResetScore(scoreModal.match.id)} 
                     className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-bold rounded border border-red-300 text-sm"
                   >
                      スコア解除
                   </button>
                 ) : <div></div>}

                 <div className="flex gap-2">
                    <button onClick={() => setScoreModal(null)} className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded text-sm">キャンセル</button>
                    <button onClick={() => handleSaveScore(scoreModal.match.id, scoreModal.s1, scoreModal.s2)} className="px-5 py-2 bg-[#2c5f4e] hover:bg-[#1f4236] text-white font-bold rounded shadow text-sm">確定して保存</button>
                 </div>
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
                <button onClick={dialog.close || dialog.onClose} className="bg-[#2c5f4e] text-[#ffffff] px-6 py-2 rounded-lg font-bold">閉じる</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}