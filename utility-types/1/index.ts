/*
  ? UTITLIY TYPES: 
  ------------------------------------------
  TODO  - Partial<T>
  TODO  - Required<T>
  TODO  - Readonly<T>
  TODO  - ReadonlyArray<T>
  TODO  - Record<K, V>
  TODO  - Pick<T, K>
  TODO  - Omit<T, K>
        - Exclude<T, U>
        - Extract<T, U>
        - Unique<T>
        - Flatten<T>
        - NonNullable<T>
        - Parameters<T>
        - ConstructorParameters<T>
        - ReturnType<T>
        - InstanceType<T>
        - ThisType<T>
        - ThisParameterType<T>
        - OmitThisParameter<T>
        - PartialPick<T, K>
        - PartialRequired<T, K>
        - Intersection<T, U>
        - UnionToIntersection<T>
        - IntersectionToUnion<T>
        - DeepNonNullable<T>
        - DeepRequired<T>
        - DeepPartial<T>
        - DeepPartialPick<T, K>
        - DeepPartialRequired<T, K>
        - DeepReadonly<T>
        - DeepReadonlyPick<T, K>
        - DeepReadonlyPartial<T>
        - DeepReadonlyRequired<T, K>
        - DeepReadonlyPartialPick<T, K>
        - DeepReadonlyPartialRequired<T, K>
  ------------------------------------------
*/

const article: Article = {
  id: 1,
  title: 'Utility types in Typescript part 1',
  description: 'Utilizing the built in types system for a cleaner code',
  slug: 'utility-types-in-typescript-part-1',
  tags: ['typescript', 'web_development', 'javascript'],
  publishedAt: '21-11-2021',
  author: {
    id: 1,
    name: 'Sobhi Al Khuder',
  },
}

interface Article {
  id: number
  title: string
  description?: string,
  slug: string,
  tags: string[]
  author?: Author
  publishedAt: string
}

interface Author {
  id: number
  name: string
}

// --------------------------------------------------------------------------------

// ? Partial<T>

function updateArticle(article: Article, fieldsToUpdate: Partial<Article>) {
  return { ...article, ...fieldsToUpdate }
}

const articlePart2 = updateArticle(article, {
  title: 'Utility types in Typescript part 2',
  description: 'How to use utility types in TS',
})
// --------------------------------------------------------------------------------

// ? Required<T>

const regularArticle: Article = { ...article } // okay

const requiredArticle: Required<Article> = { ...article } //! error

// --------------------------------------------------------------------------------

// ? Readonly<T>

const readonlyArticle: Readonly<Article> = {...article}

readonlyArticle.title = 'Hello' //! error

// --------------------------------------------------------------------------------

// ? ReadonlyArray<T>

function mutateArticles(articles: ReadonlyArray<Article>) {
  articles.slice() // okay
  articles.push({
    id: 1,
    title: 'Utility types in Typescript part 3',
  }) //! error
}

// --------------------------------------------------------------------------------

// ? Record<K, V>

type Tag = 'typescript' | 'web_development' 

const articlesByTag: Record<Tag, Article> = {
  typescript: { ...article },
  web_development: { ...article },
}

articlesByTag.typescript

// --------------------------------------------------------------------------------

// ? Pick<T, K>

type ArticleOverview = Pick<Article, 'title' | 'publishedAt'>

const articleOverview: ArticleOverview = {
  title: 'Clean room',
  publishedAt: '21-11-2021',
}

// --------------------------------------------------------------------------------

// ? Omit<T, K>

type ArticleInfo = Omit<Article, 'author' | 'tags' | 'slug'>

const articleInfo: ArticleInfo = {
  id: 1,
  title: 'Clean room',
  description: 'Clean room',
  publishedAt: '21-11-2021'
}

// --------------------------------------------------------------------------------
