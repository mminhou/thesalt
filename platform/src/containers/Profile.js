import React from "react"

function Profile({ user }) {
  const { email, password, name } = user || {}
  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </>
  )
}
//경로가 /profile 인 경우 <Profile/>로 라우팅
export default Profile