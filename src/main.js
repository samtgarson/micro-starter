import micro from 'micro'
import handler from './handler'

const srv = micro(handler)
srv.listen(3000, () => console.log('Listening on port 3000'))

export default srv
