import micro from 'micro'

const srv = micro(async () => 'hello world!')
srv.listen(3000)

export default srv
