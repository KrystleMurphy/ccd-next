

import { AcademicCapIcon, BellIcon, BookOpenIcon, MegaphoneIcon, NewspaperIcon, StarIcon } from '@heroicons/react/24/solid'
import logo from '../../../assets/images/logo.png'

export default function TimelineNews() {
    return (
        <>
                <div className="relative bg-white px-6 py-32 lg:px-8">
                <div className="text-left mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
<BookOpenIcon fill="currentColor"
        className="h-5 w-5" />
    </div>
    <div className="timeline-start md:text-end p-8">
    <img src={logo}></img>
      <time className="font-mono italic">1984</time>
      <div className="text-lg font-black">First Macintosh computer</div>
      The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
      personal computer. It played a pivotal role in establishing desktop publishing as a general
      office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
      in a beige case with integrated carrying handle; it came with a keyboard and single-button
      mouse.
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <NewspaperIcon fill="currentColor"
        className="h-5 w-5" />
    </div>
    <div className="timeline-end p-8">
    <img src={logo}></img>
      <time className="font-mono italic">1998</time>
      <div className="text-lg font-black">iMac</div>
      iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
      been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
      and has evolved through seven distinct forms
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <AcademicCapIcon fill="currentColor"
        className="h-5 w-5" />
    </div>
    <div className="timeline-start p-8 md:text-end">
    <img src={logo}></img>
      <time className="font-mono italic">2001</time>
      <div className="text-lg font-black">iPod</div>
      The iPod is a discontinued series of portable media players and multi-purpose mobile devices
      designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
      8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
      million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
      over 20 years, the iPod brand is the oldest to be discontinued by Apple
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <MegaphoneIcon fill="currentColor"
        className="h-5 w-5" />
    </div>
    <div className="timeline-end p-8">
    <img src={logo}></img>
      <time className="font-mono italic">2007</time>
      <div className="text-lg font-black">iPhone</div>
      iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
      operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
      January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
      of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
      accounts for 15.6% of global smartphone market share
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <BellIcon fill="currentColor"
        className="h-5 w-5" />
    </div>
    <div className="timeline-start p-8 md:text-end">
    <img src={logo}></img>
      <time className="font-mono italic">2015</time>
      <div className="text-lg font-black">Apple Watch</div>
      The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
      tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
      iOS and other Apple products and services
    </div>
    <hr />
  </li>
</ul>
</div>
</div>
        </>
    )
}

// Below is the code for mapping the news articles via the airtable API - alternating between displaying on the left and right dependent on the index number

// import React, { useState, useEffect } from 'react';
// import { AcademicCapIcon, BellIcon, BookOpenIcon, MegaphoneIcon, NewspaperIcon, StarIcon } from '@heroicons/react/24/solid';
// import logo from '../../../assets/images/logo.png';

// const icons = [
//   <BookOpenIcon fill="currentColor" className="h-5 w-5" />,
//   <NewspaperIcon fill="currentColor" className="h-5 w-5" />,
//   <AcademicCapIcon fill="currentColor" className="h-5 w-5" />,
//   <MegaphoneIcon fill="currentColor" className="h-5 w-5" />,
//   <BellIcon fill="currentColor" className="h-5 w-5" />,
//   <StarIcon fill="currentColor" className="h-5 w-5" />,
// ];

// export default function TimelineNews() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // Replace with AIRTABLE API COMPONENT
//     fetch('https://api.example.com/news')
//       .then(response => response.json())
//       .then(data => setArticles(data))
//       .catch(error => console.error('Error fetching news:', error));
//   }, []);

//   return (
//     <div className="relative bg-white px-6 py-32 lg:px-8">
//       <div className="text-left mx-auto max-w-3xl text-base leading-7 text-gray-700">
//         <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
//           {articles.map((article, index) => (
//             <li key={index}>
//               {index > 0 && <hr />}
//               <div className="timeline-middle">
//                 {icons[index % icons.length]}
//               </div>
//               <div className={index % 2 === 0 ? "timeline-start md:text-end p-8" : "timeline-end p-8"}>
//                 <img src={logo} alt="Logo" />
//                 <time className="font-mono italic">{article.date}</time>
//                 <div className="text-lg font-black">{article.title}</div>
//                 <p>{article.description}</p>
//               </div>
//               <hr />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
