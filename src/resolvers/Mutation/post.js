async function createDraft(parent, { title, text }, ctx, info) {
  return ctx.db.mutation.createPost(
    {
      data: {
        title,
        text,
      },
    },
    info,
  )
}

async function deletePost(parent, { id }, ctx, info) {
  return ctx.db.mutation.deletePost({ where: { id } }, info)
}

async function publish(parent, { id }, ctx, info) {
  return ctx.db.mutation.updatePost(
    {
      where: { id },
      data: { isPublished: true },
    },
    info,
  )
}

module.exports = {
  createDraft,
  deletePost,
  publish,
}
