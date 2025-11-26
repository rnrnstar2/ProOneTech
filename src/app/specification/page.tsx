import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { siteInfo } from "@/lib/site-info"

const mainNumbers = [
  { label: "全高", value: "5,040 mm" },
  { label: "本体", value: "W1050 × H1379 mm" },
  { label: "二次・三次燃焼室", value: "Φ550 × H863 mm" },
  { label: "煙突", value: "Φ220 × H3250 mm" },
  { label: "炉内容積", value: "0.498 m³" },
  { label: "火床面積", value: "0.498 m²" },
  { label: "焼却能力", value: "29.29 kg/h" },
  { label: "総重量", value: "1,345 kg" },
]

const materials = [
  { part: "本体側壁", outer: "鋼板製（耐熱塗装）", inner: "耐火レンガ張り（耐火温度1300°C）" },
  { part: "本体天井・床", outer: "鋼板製（耐熱塗装）", inner: "耐火キャスタブル張り（耐火温度1300°C）" },
  { part: "二次燃焼室", outer: "鋼板製（耐熱塗装）", inner: "耐火キャスタブル張り（耐火温度1300°C）" },
  { part: "三次燃焼室", outer: "鋼板製（耐熱塗装）", inner: "耐火キャスタブル張り（耐火温度1300°C）" },
  { part: "二重投入口", outer: "鋼板製（耐熱塗装）", inner: "耐火キャスタブル張り（耐火温度1300°C）" },
  { part: "煙突", outer: "ステンレス製", inner: "ステンレス製" },
  { part: "送風管・カバー類", outer: "耐熱塗装仕上げ", inner: "—" },
]

const featureRows = [
  { title: "投入装置", desc: "一重扉によるワンバッチ方式。オプションの二重扉なら燃焼中の再投入が可能。" },
  { title: "温度測定装置", desc: "温度センサ（熱電対）により常に炉内温度を測定。" },
  { title: "助燃装置", desc: "送風ブロアによる強制送風・排風に加え、多段燃焼とバーナーで高効率消煙。" },
  { title: "操作盤", desc: "設定温度（100℃）以下になると送風・ブロアーが自動停止する安全設計。" },
]

export const metadata = {
  title: `本体仕様 | ${siteInfo.brand}`,
  description: "ベストファイヤー焼却炉の主要寸法・材質・特徴をまとめています。",
}

export default function SpecificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="container py-12 sm:py-16 space-y-8">
        <div className="space-y-3">
          <Badge variant="secondary" className="rounded-full px-3 py-1 bg-blue-50 text-blue-700 border-blue-100">
            スペックシート
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">本体仕様</h1>
          <p className="text-muted-foreground max-w-3xl">
            ベストファイヤー HBF601-BL-Ⅱ 型の寸法・材質・特徴を、導入検討や稟議資料に使いやすい形で整理しました。
          </p>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">主要寸法・性能</CardTitle>
            <p className="text-sm text-muted-foreground">外形寸法や焼却能力の主要数値です。</p>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mainNumbers.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                <p className="text-lg font-bold text-slate-900 mt-1">{item.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">各部材質</CardTitle>
              <p className="text-sm text-muted-foreground">耐久性を高めるための外部/内部材質の構成。</p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2 pr-4 font-semibold">部位</th>
                    <th className="py-2 pr-4 font-semibold">外部材質</th>
                    <th className="py-2 font-semibold">内部材質</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {materials.map((row) => (
                    <tr key={row.part} className="align-top">
                      <td className="py-3 pr-4 font-semibold text-slate-900">{row.part}</td>
                      <td className="py-3 pr-4 text-slate-700">{row.outer}</td>
                      <td className="py-3 text-slate-700">{row.inner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">特徴</CardTitle>
              <p className="text-sm text-muted-foreground">燃焼・操作・安全性に関する主要な特徴。</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {featureRows.map((row) => (
                <div key={row.title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">{row.title}</p>
                  <p className="text-sm text-slate-700 leading-relaxed mt-1">{row.desc}</p>
                </div>
              ))}
              <Separator />
              <div className="rounded-lg bg-blue-50 text-blue-900 border border-blue-100 p-4">
                <p className="text-sm font-semibold">ワンバッチ方式とは</p>
                <p className="text-sm mt-1 leading-relaxed">
                  一重扉で炉内に6割まで投入し、燃焼中に扉を開けない運転方式。100℃以下で停止した後に再投入する設計です。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-2xl">参考：燃焼負荷と発熱量</CardTitle>
            <p className="text-sm text-muted-foreground">
              焼却能力の目安：0.498 m³ × 250,000 kcal/m³h（自治体基準により異なる場合があります）
            </p>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-4 font-semibold">廃棄物名</th>
                  <th className="py-2 font-semibold">発熱量 (kcal/kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["草・木", "3,000"],
                  ["ベニヤ・合板・化粧板", "5,000"],
                  ["集成材・ボード", "4,500"],
                  ["紙類", "4,000"],
                  ["繊維類（木綿）", "3,800"],
                  ["繊維類（羊毛）", "5,300"],
                  ["繊維類（化繊）", "6,800"],
                  ["合成ゴム", "8,300"],
                  ["一般雑芥", "4,200"],
                  ["熱可塑性樹脂（塩ビ除く）", "10,000"],
                ].map(([name, heat]) => (
                  <tr key={name}>
                    <td className="py-3 pr-4 font-semibold text-slate-900">{name}</td>
                    <td className="py-3 text-slate-700">{heat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-3">
              *詳しい焼却能力は販売店へお問い合わせください。
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
