'use client'

import Link from 'next/link'
import React from 'react'

const viewCourse = () => {
  return (
    <div>
      <Link href={{ pathname: '/course', query: { keyword: 'hindi' } }}>yay with separate component!</Link>
    </div>
  )
}

export default viewCourse