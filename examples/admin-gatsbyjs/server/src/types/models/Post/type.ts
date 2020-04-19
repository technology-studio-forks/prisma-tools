import { objectType } from '@nexus/schema'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.boolean('published', { nullable: false })
    t.string('title', { nullable: false })
    t.field('author', { nullable: true, type: 'User' })
    t.int('authorId', { nullable: true })
    t.field('comments', {
      nullable: false,
      list: [true],
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        skip: 'Int',
        after: 'CommentWhereUniqueInput',
        before: 'CommentWhereUniqueInput',
        first: 'Int',
        last: 'Int',
      },
    })
  },
})
