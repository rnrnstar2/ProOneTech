import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteInfo } from "@/lib/site-info"

const drawings = [
  {
    title: "焼却炉図面",
    description: "全体構造と寸法確認用の図面です。",
    image: "/images/焼却炉図面-1.jpg",
  },
  {
    title: "焼却炉内部構造",
    description: "多段燃焼室や煙突配置が分かる内部構造図です。",
    image: "/images/焼却炉内部構造.jpg",
  },
]

export const metadata = {
  title: `焼却炉図面 | ${siteInfo.brand}`,
  description: "外形図・内部構造図を閲覧できます。",
}

export default function DrawingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="container py-12 sm:py-16 space-y-6">
        <div className="space-y-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
            設計資料
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">焼却炉図面</h1>
          <p className="text-slate-200 max-w-3xl leading-relaxed">
            ベストファイヤーの外形寸法と内部構造を高解像度でご確認いただけます。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {drawings.map((item) => (
            <Card key={item.title} className="overflow-hidden border-slate-800 bg-slate-800/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-blue-200 text-blue-100">PDF/IMG</Badge>
                </div>
                <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
