const renderAbout = (req, res) => {
  let url = req.originalUrl
  let memberName = url.substr(url.lastIndexOf('/') + 1)

  res.render(memberName, {layout:'about'})
}

module.exports = { renderAbout }