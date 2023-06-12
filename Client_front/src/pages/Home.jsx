import React from 'react'
import { Main_navBar } from '../components/navbars/1inchclone/Main_navBar'
import { Launch_button } from '../components/buttons/1inchclone/Launch_button'
import  Section_1 from '../containers/1inchclone/Section_1'
import { Section_2 } from '../containers/1inchclone/Section_2'
import { Section_3 } from '../containers/1inchclone/Section_3'
import { Section_4 } from '../containers/1inchclone/Section_4'
import { Section_5 } from '../containers/1inchclone/Section_5'
import { Section_6 } from '../containers/1inchclone/Section_6'
import { Section_7 } from '../containers/1inchclone/Section_7'
import { Section_8 } from '../containers/1inchclone/Section_8'
import { Section_9 } from '../containers/1inchclone/Section_9'
import { Section_10 } from '../containers/1inchclone/Section_10'
import { Section_11 } from '../containers/1inchclone/Section_11'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div>
        {/* // navbar */}
        <Main_navBar></Main_navBar>
        {/* secciones */}
        <Section_1/>
        <Section_2/>
        <Section_3></Section_3>
        <Section_4></Section_4>
        <Section_5></Section_5>
        <Section_6></Section_6>
        <Section_7></Section_7>
        <Section_8></Section_8>
        <Section_9></Section_9>
        <Section_10></Section_10>
        <Section_11></Section_11>
        {/* footer */}
        <Footer></Footer>
    </div>
  )
}

