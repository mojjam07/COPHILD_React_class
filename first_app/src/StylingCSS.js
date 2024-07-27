import React from 'react'
import './components/myStyles.css'
import styles from './components/myStyles.module.css'

// function StylingCSS(props) {
//   let className = props.primary ? 'primary' : ''

//   return (
//     <div>
//         <h1 className='primary'>Styling CSS</h1>
//         <h2 className={className}>Using Tenary Operator to control Styling</h2>
//         <h2 className={`${className} font-xl`}>Using tenary operator with template literals</h2>
//     </div>
//   )
// }

// function StylingCSS(props) {
  
//   const heading = {
//     fontSize: '72px',
//     color: 'blue',
//   }

//   return (
//     <div>
//         <h1 style={heading}>Styling CSS : Inline</h1>
//         <h2>Inline Styling</h2>
//     </div>
//   )

function StylingCSS(props) {
  

  return (
    <div>
        <h1 className='error'>Error</h1>
        <h2 className={styles.success}>Success</h2>
    </div>
  )
}


export default StylingCSS


// Styling React Components
// 1. CSS stylesheets
// 2. Inline styling
// 3. CSS Modules
// 4. CSS in JS Library { Not avilable }