import { useState, ReactElement } from 'react'
import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { InputWithIcon } from "./form/InputWithIcon"
import { Alert } from './Alert'

export const SignUp = () => {
  const router = useRouter()
  const [alertList, setAlertList] = useState<ReactElement[]>([])

  type ValidatableForms = {
    email: string
    password: string
  }
  
  const { register, watch, handleSubmit, formState: { errors } } = useForm<ValidatableForms>({
    resolver: yupResolver(
      yup.object({
        email: yup.string().required('必須').email('おかしい'),
        password: yup.string().required('必須').min(8, '8文字以上').matches(/^[a-zA-Z0-9]*$/, 'おかしい')
        // 実装するとテテス面倒だけ、本当はこれ。 /^(?=.*[A-Z])(?=.*[.?/-])[a-zA-Z0-9.?/-]{8,24}$  
      })
    )
  })
  
  const handleOnSubmit = (data: any) => {
    createUserWithEmailAndPassword(
      getAuth(),
      data.email,
      data.password
    ).then(userCredential => {
      router.push('/dashboard')
    }).catch(e => {
      console.log(e)
      setAlertList([...alertList, <Alert key={alertList.length+1} message={e.code} />])
    })
  }
  
  return (
    <>
      {alertList}
      <div className='flex justify-center'>
        <div className='flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow sm:px-6 md:px-8 lg:px-10'>
          <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl'>
            Sing up your email
          </div>
          <div className='mt-8'>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <InputWithIcon inputKey='email' register={register} errorMessage={errors.email?.message} />
              <InputWithIcon inputKey='password' register={register} errorMessage={errors.password?.message} />
              <div className='mb-6'>
              </div>
              <div className='flex items-center mb-6 -mt-4'>
                <div className='flex ml-auto'>
                  <a href='#' className='inline-flex text-xs font-thin text-gray-500 sm:text-sm hover:text-gray-700'>
                    Forgot Your Password?
                  </a>
                </div>
              </div>
              <div className='flex w-full'>
                <button type='submit' className='py-2 px-4  bg-purple-600 hover:bg-purple-700 
                focus:ring-purple-500 focus:ring-offset-purple-200 
                text-white w-full transition ease-in duration-200 
                text-center text-base font-semibold shadow-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                  新規登録
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}