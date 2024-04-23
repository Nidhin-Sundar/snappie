// import React from 'react'
// import { getServerSession } from 'next-auth'
// import { redirect } from 'next/navigation'

// const Dashboard = async() => {
//     const session = await getServerSession();
//     if(!session) {
//         redirect('/');
//     }
//   return (
//     <div>
//         <h1>Dashboard </h1>
//     <h1>{session.user.name}</h1>
            
//            </div>
//   )
// }

// export default Dashboard


import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
    
  )
}

export default Dashboard