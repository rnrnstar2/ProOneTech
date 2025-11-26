import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts } from "@/lib/data"
import { ArrowRight, CheckCircle2, Flame, Shield, Wrench } from "lucide-react"

export const metadata = {
  title: "ProOneTech - 高性能無煙焼却炉",
  description: "環境に優しい高効率焼却炉ソリューション。ProOneTechの最新技術で、クリーンな廃棄物処理を実現します。",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/images/焼却炉内部構造.jpg"
            alt="ProOneTechの焼却炉内部構造"
            className="h-full w-full object-cover opacity-30 scale-105 blur-[1px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 backdrop-blur-sm mb-4 sm:mb-6 border border-blue-400/30">
            <Flame className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">最新の無煙焼却技術</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl px-4">
            ProOneTech <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">無煙焼却炉</span>
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed px-4">
            高性能で環境に優しい焼却炉ソリューション。<br />
            効率的な廃棄物管理を実現します。
          </p>
          <div className="mt-8 sm:mt-12 flex flex-col gap-3 sm:gap-4 sm:flex-row px-4 w-full sm:w-auto justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/products">
                製品を見る <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 text-lg px-8 h-14 rounded-full backdrop-blur-sm" asChild>
              <Link href="/#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 事業再構築セクション（WP「TOP」より） */}
      <section className="section-py bg-slate-900 text-white">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10">
                R2 事業再構築
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                煙の出ない高性能 消炎焼却炉
              </h2>
              <p className="text-slate-200 leading-relaxed">
                ベストファイヤー HBF601-BL-Ⅱ型。届出不要・高い燃焼効率・国内製造・構造基準適合補償・廃プラ対応。
                既存サイトのビジュアル（WPエクスポート）を反映しました。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                  <Link href="/summary">概要を見る</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">
                  <Link href="/instruction">取扱説明</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">
                  <Link href="/drawing">図面</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-slate-800 shadow-2xl">
              <img
                src="/images/焼却炉-プレゼンテーション（169）.gif"
                alt="焼却炉プレゼンテーション"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 特長セクション */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              ProOneTechの特長
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              最先端技術で、環境保護と効率性を両立
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-blue-600 transition-all group-hover:scale-110 group-hover:shadow-xl">
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
      <section id="about" className="section-py bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                ProOneTechについて
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                ProOneTechは、最新の廃棄物管理ニーズに対応する高効率焼却炉の専門メーカーです。
                環境に配慮した持続可能で無煙、かつ耐久性に優れたソリューションを提供することが私たちの使命です。
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
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
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full" asChild>
                <Link href="/summary">詳しく見る</Link>
              </Button>
            </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/焼却炉図面-1.jpg"
              alt="ProOneTech焼却炉図面"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>
        </div>
      </section>

      {/* 最新ニュース */}
      <section id="blog" className="section-py bg-slate-50">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">最新ニュース</h2>
              <p className="text-lg text-muted-foreground">ProOneTechの最新情報をお届けします</p>
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
                  <CardTitle className="line-clamp-2 text-xl group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt || "詳細はこちらをクリックしてご覧ください。"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-blue-600 font-semibold h-auto group/btn" asChild>
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
      <section id="contact" className="section-py bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            廃棄物管理をアップグレードしませんか?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            今すぐお問い合わせいただき、無料相談またはお見積りをご依頼ください。<br />
            専門チームが迅速に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-16 text-lg rounded-full shadow-xl">
              お見積り依頼
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-10 h-16 text-lg rounded-full">
              サポートに連絡
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
