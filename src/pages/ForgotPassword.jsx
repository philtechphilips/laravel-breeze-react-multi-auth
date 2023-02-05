import React, { useState } from 'react'
import axios from '../api/axios'
import useAuthContext from '../context/AuthContext'
const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const {csrf} = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setErrors([])
        setStatus(null)
        try {
            const response = await axios.post("/forgot-password", {email})
            setStatus(response.data.status)
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }
  return (
    <div>
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
            >

              <div className="mb-10 text-center md:mb-16">Laraveller</div>
              {status && <div className='bg-green-700 m-2 p-2 rounded text-white'>{status}</div>}
              <form onSubmit={handleSubmit}>
                <div mb-10 text-center md:mb-16 text-600 >Forgot your Password Lets Know Your E-mail Address And We Will E-mail You a Reset Link</div>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                  />
                {errors.email &&
                <div className="flex">
                    <span className="text-red-500 text-sm m-1 p-1">{errors.email[0]}</span>
                </div>}
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                  >
                    Sent Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ForgotPassword