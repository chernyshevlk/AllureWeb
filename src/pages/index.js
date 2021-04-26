import * as React from "react"
import '../styles/global.css'
import Seo from "../components/seo"

import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'


export default function Content() {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12 font-sans">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img
                className="h-11 w-auto"
                src="https://uploads-ssl.webflow.com/607bf3038c09f1855844559c/6086ba6b372be9b6dfff69a4_allureto.svg"
                alt="Allure"
              />
            </div>
            <div className="mt-20">
              <div>
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 tracking-wide uppercase">
                  Release 2.13.9
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-blue-600 space-x-1">
                    <span>Documentation</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                A flexible lightweight multi-language test report tool
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                The Qameta Software testing team is working on Allure Report - an open-source framework designed to create test execution reports that are clear to everyone in the team.
                </p>
              </div>
              <div className="mt-6">
              <a href="#" className="inline-flex px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Download
              </a>
          </div>              
              
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">Rated 5 stars</span> by over{' '}
                    <span className="font-medium text-indigo-600">12500 users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <svg
                  className="absolute top-0 right-0 -mr-3 lg:m-0 lg:left-0"
                  width={1900}
                  height={1900}
                  fill="none"
                  viewBox="0 0 1900 1900"
                >
                <g filter="url(#filter0_f)">
                 <path d="M888.001 399.64C941.696 454.479 955.852 555.682 931.445 639.934C906.55 724.186 842.604 791.987 762.062 835.858C681.519 879.729 584.868 899.67 508.718 866.269C432.081 832.368 376.921 745.125 342.751 639.435C309.07 533.746 296.867 410.11 351.538 354.772C405.721 299.435 526.779 312.895 633.681 323.863C740.583 334.831 833.818 344.303 888.001 399.64Z" fill="#D9F99D"/>
                </g>
                <defs>
                  <filter id="filter0_f" x="0" y="0" width="1257" height="1197" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="157" result="effect1_foregroundBlur"/>
                  </filter>
                </defs>
              </svg>


              <svg
                  className="absolute top-8 right-5 -mr-3 lg:m-0 lg:left-0"
                  width={954}
                  height={1048}
                  fill="none"
                  viewBox="0 0 954 1048"
                >
                <g filter="url(#filter0_f)">
                <path d="M605.05 435.551C633.745 491.53 646.043 540.341 637.161 586.421C628.621 632.501 598.559 676.192 553.467 704.181C508.034 731.829 447.57 744.459 401.453 723.637C355.678 702.816 324.25 648.544 316.051 594.271C308.194 539.999 323.225 486.068 355.678 429.065C388.13 372.063 437.321 312.329 484.463 314.036C531.605 316.084 576.355 379.231 605.05 435.551Z" fill="#FDE68A"/>
                </g>
                <defs>
                <filter id="filter0_f" x="0" y="0" width="954" height="1048" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="157" result="effect1_foregroundBlur"/>
                </filter>
                </defs>
              </svg>


            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://uploads-ssl.webflow.com/607bf3038c09f1855844559c/6086bcea239ee993c297e984_Monitor_06.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                The xUnit page shows statistics
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                Allure is based on standard xUnit results output but adds some supplementary data. Any report is generated in two steps. During test execution (first step), a small library called adapter attached to the testing framework saves information about executed tests to XML files. We already provide adapters for popular Java, PHP, Ruby, Python, Scala and C# test frameworks.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                    donec aliquet. Mi venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">                    
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">User Name, position</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://uploads-ssl.webflow.com/607bf3038c09f1855844559c/6086ba6b959e27ffa053ec15_device.png"
                alt=""
              />
            </div>
            <div className="hidden sm:block">
              <svg
                  className="absolute top-8 right-5 -mr-3 lg:m-0 lg:left-0"
                  width={954}
                  height={1048}
                  fill="none"
                  viewBox="0 0 954 1048"
                >
              <g filter="url(#filter0_f)">
              <path d="M580.771 263.42C615.124 294.474 646.574 339.731 637.381 374.155C628.43 408.579 578.594 432.17 534.081 445.41C489.325 458.891 449.892 461.78 416.023 447.817C381.912 433.855 353.365 402.561 333.77 357.785C314.174 313.01 303.772 254.754 328.447 225.866C352.882 196.979 412.394 197.46 460.778 206.367C509.163 215.033 546.419 232.125 580.771 263.42Z" fill="#DBEAFE"/>
              </g>
              <defs>
              <filter id="filter0_f" x="0" y="-113" width="953" height="884" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="157" result="effect1_foregroundBlur"/>
              </filter>
              </defs>
              </svg>


            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Graphs help you to visually estimate test results
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                During report generation (second step), the XML files are transformed to a HTML report. This can be done with a command line tool, a plugin for CI or a build tool. See examples and documentation for more details.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://uploads-ssl.webflow.com/607bf3038c09f1855844559c/6086ba6b959e27ffa053ec15_device.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>    
    </div>    
  )
}

