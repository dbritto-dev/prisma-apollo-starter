async function feed(parent, args, ctx, info) {
  return ctx.db.query.posts({ where: { isPublished: true } }, info)
}

async function drafts(parent, args, ctx, info) {
  return ctx.db.query.posts({ where: { isPublished: false } }, info)
}

async function post(parent, { id }, ctx, info) {
  return ctx.db.query.post({ where: { id } }, info)
}

module.exports = {
  feed,
  drafts,
  post,
}
