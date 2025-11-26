import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts, products } from "@/lib/data"
import { siteInfo } from "@/lib/site-info"
import { ArrowRight, CheckCircle2, Flame, Shield, Wrench } from "lucide-react"

export const metadata = {
  title: `${siteInfo.brand} - 高性能無煙焼却炉`,
  description: `環境に優しい高効率焼却炉ソリューション。${siteInfo.brand}の最新技術で、クリーンな廃棄物処理を実現します。`,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/images/generated_image_030def62-c154-47b3-9d54-89e0c0fa2532.png"
            alt={`${siteInfo.brand} 焼却炉ビジュアル`}
            className="h-full w-full object-cover opacity-70 scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 backdrop-blur-sm mb-4 sm:mb-6 border border-blue-400/30">
            <Flame className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">最新の無煙焼却技術</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl px-4">
            {siteInfo.brand} <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">無煙焼却炉</span>
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed px-4">
            高性能で環境に優しい焼却炉ソリューション。<br />
            効率的な廃棄物管理を実現します。
          </p>
          <div className="mt-8 sm:mt-12 flex flex-col gap-3 sm:gap-4 sm:flex-row px-4 w-full sm:w-auto justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/products">
                製品を見る <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-blue-800 border-blue-300 hover:bg-blue-100 text-lg px-8 h-14 rounded-full shadow-sm" asChild>
              <Link href="/#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 事業再構築セクション（WP「TOP」より） */}
      <section className="section-py bg-white text-slate-900">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm border border-blue-300 text-blue-800">
                R2 事業再構築
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                煙の出ない高性能 消炎焼却炉
              </h2>
              <p className="text-slate-600 leading-relaxed">
                ベストファイヤー HBF601-BL-Ⅱ型。届出不要・高い燃焼効率・国内製造・構造基準適合補償・廃プラ対応。
                既存サイトのビジュアル（WPエクスポート）を反映しました。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/summary">概要を見る</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-blue-300 text-blue-800 hover:bg-blue-100">
                  <Link href="/instruction">取扱説明</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-blue-300 text-blue-800 hover:bg-blue-100">
                  <Link href="/drawing">図面</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 border border-blue-300">
                ベストファイヤー HBF601-BL-Ⅱ型
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "煙の出ない高性能・消炎構造",
                  "届出不要（小型枠）",
                  "高い燃焼効率と強制送風",
                  "国内製造・構造基準適合補償",
                  "廃プラ対応の多段燃焼",
                  "温度センサ＋助燃装置で安全運転",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-800 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特長セクション */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {siteInfo.brand}の特長
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              最先端技術で、環境保護と効率性を両立
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-blue-800 transition-all group-hover:scale-110 group-hover:shadow-xl">
                <Flame className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-3">無煙技術</h3>
              <p className="text-muted-foreground leading-relaxed">
                先進的な燃焼技術により、煙や有害物質の排出を最小限に抑え、厳しい環境基準をクリアします。
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 text-green-600 transition-all group-hover:scale-110 group-hover:shadow-xl">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-3">高耐久性</h3>
              <p className="text-muted-foreground leading-relaxed">
                高品質な素材を使用し、高温環境下でも長期間の連続運転に耐える設計です。
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-6 text-orange-600 transition-all group-hover:scale-110 group-hover:shadow-xl">
                <Wrench className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-3">簡単メンテナンス</h3>
              <p className="text-muted-foreground leading-relaxed">
                ユーザーフレンドリーな設計で、メンテナンス作業を簡素化し、ランニングコストを低減します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section id="about" className="section-py bg-gradient-to-br from-blue-50 via-white to-white text-slate-900">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {siteInfo.brand}について
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {siteInfo.brand}は、最新の廃棄物管理ニーズに対応する高効率焼却炉の専門メーカーです。
                環境に配慮した持続可能で無煙、かつ耐久性に優れたソリューションを提供することが私たちの使命です。
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                20年以上にわたる熱工学の経験を活かし、環境への影響を最小限に抑えながら効率を最大化する燃焼技術を完成させました。
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
                  <div className="text-sm text-slate-400">年の実績</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
                  <div className="text-sm text-slate-400">導入実績</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-sm text-slate-400">顧客満足度</div>
                </div>
              </div>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 rounded-full" asChild>
                <Link href="/summary">詳しく見る</Link>
              </Button>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-slate-700/60">
              <img
                src="/images/generated_image_d1b06f37-f294-4fbb-9e87-8205593c3e6d.png"
                alt={`${siteInfo.brand} 焼却炉ビジュアル`}
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 法律対応セクション（WP「小型焼却炉の法律」より） */}
      <section className="section-py bg-gray-50">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">小型焼却炉の法律について</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              ベストファイヤーは「届出不要・構造基準適合」を重視した設計です。主要法令への適合ポイントをまとめました。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="h-full border-blue-300 bg-white shadow-sm">
              <CardHeader>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">ダイオキシン類対策特別措置法</div>
                <CardTitle className="text-xl mt-2">届出不要枠内</CardTitle>
                <CardDescription className="text-sm">
                  火床面積0.5m²未満、焼却能力50kg/h未満のため届出・年1回測定の対象外。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>対象規模（0.5m²以上/50kg/h以上）を超える場合は届出と年1回の測定が義務。</p>
                <p className="text-blue-800 font-semibold">ベストファイヤーは該当外。</p>
                <details className="mt-2 rounded-lg border border-blue-300 bg-blue-100/40 px-3 py-2 text-slate-700">
                  <summary className="cursor-pointer text-blue-800 font-semibold">詳細を見る</summary>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs leading-relaxed">
                    <li>設置60日前までの届出義務（対象規模のみ）。</li>
                    <li>年1回以上、排ガス・ばい塵・焼却灰を測定し報告。</li>
                    <li>基準超過時は改善義務。排ガス/ばい塵/焼却灰の基準：5 / 3 / 3 ng-TEQ/m³N。</li>
                  </ul>
                </details>
              </CardContent>
            </Card>

            <Card className="h-full border-emerald-100 bg-white shadow-sm">
              <CardHeader>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">廃棄物処理法 構造基準</div>
                <CardTitle className="text-xl mt-2">800℃以上で燃焼</CardTitle>
                <CardDescription className="text-sm">
                  燃焼ガス800℃以上・十分な送風・投入口遮断・温度計測・助燃装置を装備。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>多段燃焼＋強制送風＋温度センサ＋バーナーで基準をクリア。</p>
                <details className="mt-2 rounded-lg border border-emerald-100 bg-emerald-50/40 px-3 py-2 text-slate-700">
                  <summary className="cursor-pointer text-emerald-700 font-semibold">詳細を見る</summary>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs leading-relaxed">
                    <li>燃焼ガス800℃以上で焼却できる構造。</li>
                    <li>十分な通風と、燃焼中の外気遮断＋定量投入。</li>
                    <li>温度測定装置と助燃装置を設置（自己加熱可能な廃棄物のみの場合を除く）。</li>
                  </ul>
                </details>
              </CardContent>
            </Card>

            <Card className="h-full border-amber-100 bg-white shadow-sm">
              <CardHeader>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">消防法</div>
                <CardTitle className="text-xl mt-2">据付面積 約1.2m²</CardTitle>
                <CardDescription className="text-sm">
                  2m²以上で届出義務。ベストファイヤーは対象外だが、保有距離を確保。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>設置距離の目安：上方2.5m以上 / 側方2.0m以上 / 前方3.0m以上 / 後方2.0m以上。</p>
                <details className="mt-2 rounded-lg border border-amber-100 bg-amber-50/40 px-3 py-2 text-slate-700">
                  <summary className="cursor-pointer text-amber-700 font-semibold">詳細を見る</summary>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs leading-relaxed">
                    <li>据付面積2m²以上は設置7日前までに消防長へ届出。</li>
                    <li>ベストファイヤーは面積1.2m²のため届出対象外。</li>
                  </ul>
                </details>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>厚生省告示 第178号（平成9年）</CardTitle>
                <CardDescription>燃焼方法に関する3つの遵守事項</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>煙突先端以外から燃焼ガスを出さない。</li>
                  <li>25％を超える黒煙や火炎を出さない。</li>
                  <li>焼却灰・未燃物を飛散させない。</li>
                </ul>
                <p className="text-amber-700 font-semibold">違反は懲役・罰金の対象。適正運用が必須です。</p>
                <details className="mt-2 rounded-lg border border-slate-200 bg-gray-100 px-3 py-2 text-slate-700">
                  <summary className="cursor-pointer font-semibold text-slate-800">詳細を見る</summary>
                  <p className="text-xs leading-relaxed mt-2">
                    違反者には「3年以下の懲役、300万円以下の罰金またはその両方」。法人には加重罰が適用される場合があります。
                  </p>
                </details>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>野外焼却（野焼き）の禁止</CardTitle>
                <CardDescription>廃掃法 第16条の2</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>野焼きは違法です。罰則：5年以下の懲役または1,000万円以下の罰金（法人は最大1億円）。</p>
                <p>適法な焼却炉で、基準に沿った運用を行ってください。</p>
                <details className="mt-2 rounded-lg border border-slate-200 bg-gray-100 px-3 py-2 text-slate-700">
                  <summary className="cursor-pointer font-semibold text-slate-800">詳細を見る</summary>
                  <p className="text-xs leading-relaxed mt-2">
                    焼却灰・未燃物の飛散を防ぎ、煙突からの黒煙を抑えることが求められます。違反時は個人に加え法人にも加重罰が科されます。
                  </p>
                </details>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 部品・オプション価格（WP「部品単価」より） */}
      <section className="section-py bg-white">
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">部品・オプション価格</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              加工部品の価格表イメージです。最新価格はお問い合わせください。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr] items-center">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-gray-100 flex items-center justify-center">
              <img
                src="/images/generated_image_3093a58a-6f9b-491a-827f-24a4d5c7e461.png"
                alt="部品価格表"
                className="h-full w-full object-contain"
              />
            </div>
            <Card className="border-slate-200 h-full">
              <CardHeader>
                <CardTitle className="text-2xl">価格・部品のご案内</CardTitle>
                <CardDescription>詳しい価格は担当までお問い合わせください。</CardDescription>
              </CardHeader>
              <CardFooter className="justify-end gap-3">
                <Button asChild variant="outline">
                  <Link href="/products">部品一覧を見る</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">見積もり依頼</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 最新ニュース */}
      <section id="blog" className="section-py bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">最新ニュース</h2>
              <p className="text-lg text-muted-foreground">{siteInfo.brand}の最新情報をお届けします</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/blog">すべて見る →</Link>
            </Button>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">
                      <span className="text-5xl">📰</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs font-normal">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('ja-JP')}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl group-hover:text-blue-800 transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt || "詳細はこちらをクリックしてご覧ください。"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-blue-800 font-semibold h-auto group/btn" asChild>
                    <Link href={`/posts/${post.id}`}>
                      記事を読む <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="section-py bg-gradient-to-br from-blue-50 via-white to-white text-slate-900">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-slate-900">
            廃棄物管理をアップグレードしませんか?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            今すぐお問い合わせいただき、無料相談またはお見積りをご依頼ください。<br />
            専門チームが迅速に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-10 h-16 text-lg rounded-full shadow-xl">
              お見積り依頼
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-300 text-blue-800 hover:bg-blue-100 px-10 h-16 text-lg rounded-full bg-white"
            >
              サポートに連絡
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
