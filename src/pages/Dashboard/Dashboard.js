import React from 'react'

import './Dashboard.css'

export default function Dashboard(){
  return (
    <div className='dashboard'>
        <a href="https://github.com/hganchev">
            <img align="center" src="https://github-readme-stats.vercel.app/api?username=hganchev&show_icons=true&hide_title=true&count_private=true&theme=vue" />
        </a>
        <a href="https://github.com/hganchev">
            <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=hganchev&layout=compact&theme=vue" />
        </a>
    </div>
  )
}
