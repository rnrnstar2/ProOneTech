import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteInfo } from "@/lib/site-info"

const cautionLevels = [
  {
    title: "注意",
    desc: "中程度の障害や損害を受ける可能性がある場合。",
    image: "/images/caution.png",
  },
  {
    title: "警告",
    desc: "死亡または重傷の可能性が想定される場合。",
    image: "/images/cautionのコピー.png",
  },
  {
    title: "危険",
    desc: "緊急性・切迫性の高い重大事故につながる可能性がある場合。",
    image: "/images/cautionのコピー2.png",
  },
]

const safetyRequests = [
  "慣らし運転を最初の数日間行い、極端に高温にしない。",
  "焼却時間の目安は1日4時間以内に抑える。",
  "重い角材などを耐火レンガへぶつけない。炉内へ水をかけて急冷しない。",
  "使用前に周囲の可燃物を除去し、必ず灰出しを行う。",
  "フレームアイ（炎検出装置）は月1回掃除する。",
  "電源の抜けや停電に注意し、使用中は主幹スイッチを切らない。",
  "投入量は炉内高さの60％まで。煙が出たら投入を控える。",
  "バーナーの風量・送油量は出荷時設定のまま使用する。",
  "高発熱物（廃プラ等）は焼却能力を超えないよう投入量を調整する。",
]

const operationSteps = [
  "主幹スイッチをONにする → バーナー送風が自動で始まります。",
  "スタートスイッチを押す → 送風音と温度表示を確認。",
  "バーナーメインスイッチをONにする。",
  "バーナー着火スイッチをONにする。",
  "約10分後に焼却物へ着火し、送風スイッチをON。",
  "焼却物の投入終了後は、炉内温度が100℃以下になると自動停止します。",
]

const fuelingSteps = [
  { title: "焼却物の準備", detail: "燃えにくい服装と軍手を着用し、安全に作業します。" },
  { title: "焼却物の投入", detail: "安全ロックを外して投入扉を開け、投入後は確実にロック。" },
  { title: "点火", detail: "煙突直下付近の焼却物に紙などを置き、着火後は扉をしっかり閉める。" },
  { title: "終了", detail: "1日の作業終了時はバーナーメインスイッチのみOFF。自動停止後、長期不使用時は全電源をOFF。" },
]

const maintenance = [
  "灰は定期的に灰出し扉から排出し、ロストル下に溜めない。",
  "フレームアイ（炎検出器）のレンズは定期的に清掃する。",
  "本体・煙突・笠に腐食・破損があれば早めに交換する。",
  "塩ビなど塩化水素が出るものは焼却しない（高温腐食の原因）。",
  "清掃・点検は炉体が十分に冷えてから行い、灰の処分も安全に。"
]

const troubles = [
  { symptom: "モーターが動作しない", cause: "電力・配線・操作盤の異常", action: "断線や緩みを点検し、再操作または専門業者に確認。" },
  { symptom: "点火しない / すぐ消える", cause: "フレームアイ汚れ / 燃料・空気不足", action: "フレームアイ清掃、給油圧やエアダンパー調整、燃料量を確認。" },
  { symptom: "燃焼が不安定", cause: "ノズル汚れ / 空気量不適正", action: "ノズル清掃とエアダンパー・燃料調整。" },
  { symptom: "黒煙・白煙が出る", cause: "空気量の過不足", action: "エアダンパーを調整し、最適な数値にセット。" },
]

export const metadata = {
  title: `取扱説明 | ${siteInfo.brand}`,
  description: "安全に無煙焼却炉をお使いいただくための重要なポイントをまとめました。",
}

export default function InstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/スクリーンショット-2022-12-27-11.51.12.png"
            alt="操作盤イメージ"
            className="h-full w-full object-cover opacity-20 blur-[1px] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-950" />
        <div className="container relative z-10 py-14 sm:py-16 space-y-4 max-w-4xl">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-3 py-1 rounded-full">
            取扱説明
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">安全にお使いいただくために</h1>
          <p className="text-slate-200 text-lg leading-relaxed">
            ベストファイヤー焼却炉の取扱いで重要な注意事項・操作手順・メンテナンス方法を抜粋してまとめました。
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <Link href="/specification">仕様を確認</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
              <Link href="/drawing">図面を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900">
        <div className="container py-12 sm:py-16 space-y-10">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">はじめに</CardTitle>
              <p className="text-sm text-muted-foreground">
                ご購入ありがとうございます。安全にお使いいただくため、以下の注意を守って運用してください。
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                焼却炉を安心してご使用いただくために、取扱説明と注意事項を必ずご確認ください。
                説明書はすぐ取り出せる場所に保管をお願いします。
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {cautionLevels.map((level) => (
                  <div key={level.title} className="rounded-xl border border-slate-200 p-4 shadow-sm h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <img src={level.image} alt={level.title} className="h-10 w-10 object-contain" />
                      <p className="font-semibold">{level.title}</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{level.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-blue-50 text-blue-900 border border-blue-100 p-4 text-sm leading-relaxed">
                注意事項は状況によって重大事故につながる可能性があります。必ず遵守してください。
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">安全にお使いいただくためのお願い</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {safetyRequests.map((item, idx) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">操作盤の流れ</CardTitle>
                <p className="text-sm text-muted-foreground">誤操作による故障を防ぐための基本ステップ。</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {operationSteps.map((step, idx) => (
                  <div key={step} className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
                      {idx + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-800">{step}</p>
                  </div>
                ))}
                <div className="rounded-lg bg-amber-50 text-amber-900 border border-amber-200 p-3 text-sm leading-relaxed">
                  燃焼中に主幹スイッチをOFFにすると逆流熱でバーナーが損傷する恐れがあります。使用中は触れないでください。
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">焼却物の投入・点火</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {fuelingSteps.map((step, idx) => (
                  <div key={step.title} className="rounded-lg border border-slate-200 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-slate-900">{idx + 1}. {step.title}</p>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
                <div className="rounded-lg bg-blue-50 text-blue-900 border border-blue-100 p-3 text-sm leading-relaxed">
                  二重扉オプションなら燃焼中の再投入が可能です。標準扉では再投入できません。
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">保守・管理</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {maintenance.map((item, idx) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    ✓
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">故障かな？と思ったら</CardTitle>
              <p className="text-sm text-muted-foreground">よくある症状と確認ポイント。</p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2 pr-4 font-semibold">症状</th>
                    <th className="py-2 pr-4 font-semibold">原因例</th>
                    <th className="py-2 font-semibold">対処</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {troubles.map((row) => (
                    <tr key={row.symptom} className="align-top">
                      <td className="py-3 pr-4 font-semibold text-slate-900">{row.symptom}</td>
                      <td className="py-3 pr-4 text-slate-700">{row.cause}</td>
                      <td className="py-3 text-slate-700">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild className="rounded-full">
              <Link href="/specification">本体仕様を見る</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-slate-300">
              <Link href="/drawing">図面を見る</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-slate-300">
              <Link href="/company">製造元を確認</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
