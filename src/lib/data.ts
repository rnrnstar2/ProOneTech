export interface Product {
  id: string;
  title: string;
  price: number;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
  categories: string[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  categories: string[];
  category: string;
}

export const products: Product[] = [
  {
    "id": "29",
    "title": "【23】簡易投入扉",
    "content": "",
    "excerpt": "",
    "date": "2022-11-04 12:17:05",
    "slug": "【23】簡易投入扉",
    "image": "/images/名称未設定4.002.jpeg",
    "price": 75000,
    "categories": [
      "outofstock",
      "simple",
      "加工部品"
    ],
    "category": "加工部品"
  },
  {
    "id": "35",
    "title": "【25】ロストル(一対)",
    "content": "",
    "excerpt": "",
    "date": "2022-11-04 12:17:05",
    "slug": "【25】ロストル(一対)",
    "image": "/images/名称未設定4.007.jpeg",
    "price": 20000,
    "categories": [
      "outofstock",
      "simple",
      "加工部品"
    ],
    "category": "加工部品"
  },
  {
    "id": "36",
    "title": "【21】煙突トップ",
    "content": "",
    "excerpt": "",
    "date": "2022-11-04 12:17:05",
    "slug": "【21】煙突トップ",
    "image": "/images/名称未設定4.005.jpeg",
    "price": 35000,
    "categories": [
      "outofstock",
      "simple",
      "加工部品"
    ],
    "category": "加工部品"
  },
  {
    "id": "37",
    "title": "【20】煙突_SUS t3",
    "content": "",
    "excerpt": "",
    "date": "2022-11-04 12:17:05",
    "slug": "【20】煙突_SUS t3",
    "image": "/images/名称未設定4.006.jpeg",
    "price": 65000,
    "categories": [
      "outofstock",
      "simple",
      "加工部品"
    ],
    "category": "加工部品"
  },
  {
    "id": "38",
    "title": "【19】煙突台座",
    "content": "",
    "excerpt": "",
    "date": "2022-11-04 12:17:05",
    "slug": "【19】煙突台座",
    "image": "/images/名称未設定4.004.jpeg",
    "price": 35000,
    "categories": [
      "outofstock",
      "simple",
      "加工部品"
    ],
    "category": "加工部品"
  },
  {
    "id": "39",
    "title": "【24】灰出し扉",
    "content": "",
    "excerpt": "",
    "date": "2022-11-04 12:17:05",
    "slug": "【24】灰出し扉",
    "image": "/images/名称未設定4.003.jpeg",
    "price": 30000,
    "categories": [
      "outofstock",
      "simple",
      "加工部品"
    ],
    "category": "加工部品"
  }
] as unknown as Product[];

export const posts: Post[] = [
  {
    "id": "1",
    "title": "産業廃棄物処理における焼却技術の最新動向",
    "content": "<!-- wp:heading {\"level\":2} -->\n<h2>焼却技術の進化が環境負荷を大幅削減</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>近年、産業廃棄物処理における焼却技術は目覚ましい進化を遂げています。従来の焼却炉と比較して、最新の焼却システムは環境負荷を大幅に削減しながら、より効率的な廃棄物処理を実現しています。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>高温燃焼技術による完全燃焼</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>最新の焼却炉では、燃焼温度を最適に制御することで、ダイオキシンやその他の有害物質の発生を最小限に抑えています。特に、850℃以上の高温で2秒以上滞留させる二次燃焼室の導入により、排ガス中の有害物質を99.9%以上削減することが可能になりました。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>排ガス処理システムの高度化</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>現代の焼却システムには、多段階の排ガス処理装置が標準装備されています。バグフィルターによる粒子状物質の除去、触媒脱硝装置によるNOx削減、湿式洗浄装置による酸性ガスの中和など、環境基準を大幅に上回る清浄度を実現しています。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>エネルギー回収システム</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>廃棄物の焼却で発生する熱エネルギーを回収し、発電や給湯に活用する技術も普及しています。これにより、焼却施設自体のエネルギー自給率を向上させるだけでなく、周辺施設へのエネルギー供給も可能になっています。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>IoT・AIによる運転最適化</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>センサー技術とAIを活用した自動制御システムにより、廃棄物の性状に応じた最適な燃焼条件をリアルタイムで調整できるようになりました。これにより、人的ミスの削減と安定した処理品質の維持が可能になっています。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>これらの技術革新により、焼却処理は環境に配慮した持続可能な廃棄物処理方法として、ますます重要な役割を担っています。</p>\n<!-- /wp:paragraph -->",
    "excerpt": "産業廃棄物処理における焼却技術の最新動向を解説。高温燃焼技術、排ガス処理システム、エネルギー回収、IoT・AIによる運転最適化など、環境負荷を削減する革新的な技術をご紹介します。",
    "date": "2025-01-15 09:00:00",
    "slug": "latest-incinerator-technology-trends",
    "image": "/images/generated_image_d1b06f37-f294-4fbb-9e87-8205593c3e6d.png",
    "categories": [
      "技術情報"
    ],
    "category": "技術情報"
  },
  {
    "id": "2",
    "title": "環境配慮型焼却炉システムの選定ポイント",
    "content": "<!-- wp:heading {\"level\":2} -->\n<h2>適切な焼却炉選びが事業の成功を左右する</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>焼却炉の導入は大きな投資となります。環境規制への対応、ランニングコスト、処理能力など、多角的な視点から最適なシステムを選定することが重要です。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>1. 処理対象物の性状分析</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>まず、処理する廃棄物の種類、量、発熱量、水分含有率などを正確に把握することが必要です。産業廃棄物の種類によって、必要となる炉の構造や温度管理システムが異なります。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>一般産業廃棄物：汎用型焼却炉で対応可能</li>\n<li>医療廃棄物：高温処理が可能な専用炉が必要</li>\n<li>特殊廃棄物：個別設計が必要な場合も</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>2. 環境規制への適合性</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>大気汚染防止法、廃棄物処理法など、関連法規への適合は必須条件です。特に以下の点を確認しましょう。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>排ガス基準値のクリア（ダイオキシン類、ばいじん、NOx、SOxなど）</li>\n<li>騒音・振動規制への対応</li>\n<li>定期的な測定・報告体制の構築</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>3. ライフサイクルコストの試算</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>初期投資だけでなく、15〜20年間の運用を見据えたトータルコストを評価することが重要です。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>燃料費・電力費</li>\n<li>メンテナンス費用</li>\n<li>消耗品費（耐火材、フィルターなど）</li>\n<li>人件費</li>\n<li>将来的な設備更新費用</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>4. 操作性とメンテナンス性</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>日常的な運転管理やメンテナンスのしやすさも重要な選定基準です。自動化システムの導入により、人的ミスを削減し、安定した運転を実現できます。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>5. メーカーサポート体制</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>トラブル発生時の迅速な対応、定期点検サービス、部品供給体制など、長期的なサポート体制が充実しているかも確認しましょう。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>これらのポイントを総合的に評価することで、環境に配慮しながら経済的にも持続可能な焼却システムを選定できます。</p>\n<!-- /wp:paragraph -->",
    "excerpt": "焼却炉システムの選定で失敗しないための5つのポイントを解説。処理対象物の分析、環境規制への適合、ライフサイクルコスト、操作性、サポート体制など、導入前に確認すべき重要事項をまとめました。",
    "date": "2025-01-20 10:30:00",
    "slug": "how-to-choose-eco-friendly-incinerator",
    "image": "/images/generated_image_3093a58a-6f9b-491a-827f-24a4d5c7e461.png",
    "categories": [
      "導入ガイド"
    ],
    "category": "導入ガイド"
  },
  {
    "id": "3",
    "title": "焼却炉の長寿命化を実現する保守管理のポイント",
    "content": "<!-- wp:heading {\"level\":2} -->\n<h2>適切なメンテナンスで設備寿命を2倍に延ばす</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>焼却炉は高温環境下で稼働する設備であり、適切な保守管理を行わないと予期せぬトラブルや早期の設備更新が必要になります。計画的なメンテナンスにより、設備寿命を大幅に延ばすことができます。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>日常点検の重要性</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>毎日の運転前後に以下の項目を確認することで、異常の早期発見が可能になります。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>燃焼室内の目視確認（亀裂、剥離の有無）</li>\n<li>排ガス温度・色の確認</li>\n<li>異音・異常振動の有無</li>\n<li>圧力計、温度計の指示値確認</li>\n<li>灰の排出状況確認</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>定期点検の実施</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>法定点検に加え、メーカー推奨の定期点検を確実に実施しましょう。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>月次点検</h4>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul>\n<li>バーナーノズルの清掃・点検</li>\n<li>排ガスダクトの点検</li>\n<li>各種フィルターの清掃・交換</li>\n<li>潤滑油の補充・交換</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>年次点検</h4>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul>\n<li>耐火材の打音検査・補修</li>\n<li>燃焼ファンのオーバーホール</li>\n<li>排ガス処理装置の性能確認</li>\n<li>電気系統の絶縁抵抗測定</li>\n<li>安全装置の作動確認</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>消耗部品の計画的交換</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>主要消耗部品の交換時期を把握し、計画的に交換することで、突然の故障を防ぐことができます。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:table -->\n<table><tbody><tr><td>部品名</td><td>交換目安</td></tr><tr><td>耐火レンガ</td><td>3〜5年</td></tr><tr><td>バグフィルター</td><td>2〜3年</td></tr><tr><td>バーナーノズル</td><td>1〜2年</td></tr><tr><td>ロストル</td><td>2〜4年</td></tr></tbody></table>\n<!-- /wp:table -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>運転記録の管理</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>日々の運転データを記録・分析することで、設備の経年劣化や異常の予兆を察知できます。最近では、IoTシステムを活用した自動記録・分析サービスも普及しています。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>作業員の教育訓練</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>適切な運転操作とメンテナンス技術を持った作業員の育成も、設備の長寿命化には欠かせません。定期的な社内研修やメーカー講習会への参加を推奨します。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>これらの保守管理を確実に実施することで、焼却炉の稼働率向上とトータルコストの削減を実現できます。</p>\n<!-- /wp:paragraph -->",
    "excerpt": "焼却炉の寿命を最大限に延ばす保守管理のポイントを詳しく解説。日常点検、定期点検、消耗部品の交換計画、運転記録管理など、実務に役立つメンテナンス情報をまとめました。",
    "date": "2025-01-25 14:00:00",
    "slug": "incinerator-maintenance-guide",
    "image": "/images/MG_3825-1.jpeg",
    "categories": [
      "メンテナンス"
    ],
    "category": "メンテナンス"
  },
  {
    "id": "4",
    "title": "中小企業における焼却炉導入の成功事例",
    "content": "<!-- wp:heading {\"level\":2} -->\n<h2>地域の製造業A社の課題解決ストーリー</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>従業員50名規模の製造業A社では、産業廃棄物の処理コスト増加と環境対応が経営課題となっていました。焼却炉の導入により、これらの課題を解決した事例をご紹介します。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>導入前の課題</h3>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul>\n<li>年間の廃棄物処理委託費用：約800万円</li>\n<li>廃棄物の一時保管スペースの不足</li>\n<li>処理業者への搬出回数が週3回と頻繁</li>\n<li>産業廃棄物処理に関する規制強化への対応</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>導入した焼却システム</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>A社では、処理量と廃棄物の性状を考慮し、日量500kg処理能力の中型焼却炉を導入しました。主な仕様は以下の通りです。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>処理能力：500kg/日</li>\n<li>燃焼方式：ロータリーキルン式</li>\n<li>排ガス処理：バグフィルター + 湿式洗浄装置</li>\n<li>制御システム：自動運転対応</li>\n<li>エネルギー回収：排熱ボイラー付き</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>導入後の効果</h3>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>コスト削減効果</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>導入から2年間の運用実績を分析した結果、以下のコスト削減を実現しました。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>廃棄物処理委託費：年間約600万円削減（75%削減）</li>\n<li>燃料費・電力費：年間約150万円</li>\n<li>メンテナンス費用：年間約50万円</li>\n<li>実質的な年間削減効果：約400万円</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>初期投資額は約2,500万円でしたが、年間400万円のコスト削減により、約6年で投資回収できる見込みです。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>業務効率の向上</h4>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul>\n<li>廃棄物の一時保管スペースを60%削減</li>\n<li>処理業者との連絡調整業務の大幅削減</li>\n<li>廃棄物処理のタイミングを自社で管理可能に</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>環境面でのメリット</h4>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul>\n<li>CO2排出量：年間約15トン削減（搬送車両の削減分）</li>\n<li>排熱を工場の給湯に活用し、ボイラー燃料を削減</li>\n<li>環境報告書での取り組みアピールによる企業イメージ向上</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>成功のポイント</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>A社の導入プロジェクトが成功した主な要因は以下の通りです。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul>\n<li>廃棄物の量と性状を正確に把握した上で適切な設備を選定</li>\n<li>専門業者による綿密な設置計画と施工</li>\n<li>操作員への十分な教育訓練の実施</li>\n<li>メーカーとの保守契約による安定稼働の確保</li>\n<li>補助金制度を活用した初期投資の軽減</li>\n</ul>\n<!-- /wp:list -->\n\n<!-- wp:heading {\"level\":3} -->\n<h3>今後の展望</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>A社では、焼却炉導入の成功を受けて、さらなる環境対策として太陽光発電の導入や、廃熱を利用した乾燥設備の追加を検討しています。自社での廃棄物処理を軸とした持続可能な生産体制の構築を目指しています。</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>この事例は、適切な計画と運用により、中小企業でも焼却炉導入のメリットを最大限に享受できることを示しています。</p>\n<!-- /wp:paragraph -->",
    "excerpt": "中小製造業における焼却炉導入の成功事例を詳しく紹介。導入前の課題、選定プロセス、コスト削減効果、業務効率化のメリットなど、実際のデータに基づいた具体的な成果を解説します。",
    "date": "2025-02-01 11:00:00",
    "slug": "small-business-incinerator-case-study",
    "image": "/images/sansuirou-650n.jpeg",
    "categories": [
      "導入事例"
    ],
    "category": "導入事例"
  }
];
