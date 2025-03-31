import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import CrownIcon from "./Crown"
import Image from "next/image"
export default function Reviews() {
  return (
    <section className="my-10 mx-auto max-w-5xl rounded-xl p-6">
      <div className="mb-8 flex items-center justify-center">
      <h3 className="text-3xl font-bold text-gray-900 text-center">
          <span className="relative inline-block top-[-10px] text-center">
            <CrownIcon className="absolute h-8 w-8 text-purple-600 -top-8 left-1/2 -translate-x-1/2" />
          </span>
          <span>Reviews </span>from XpertBuddy Community
        </h3>
      </div>

      <div className="mb-8 flex flex-wrap justify-center items-center gap-6 w-full">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
            <Image src="/logo.png" alt="ExpertBuddy" width={24} height={24} />
          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">ExpertBuddy</div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-xs font-bold">5.0</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-black rounded-sm">
          <svg
              width="24"
              height="24"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3327 22.6535L23.0244 20.9577L25.8202 29.5744L16.3327 22.6535ZM31.7327 11.516H19.9536L16.3327 0.424377L12.7119 11.516H0.932739L10.4661 18.391L6.84524 29.4827L16.3786 22.6077L22.2452 18.391L31.7327 11.516Z"
                fill="#0AB67B"
              />
            </svg>
          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">Trustpilot</div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  width="15"
                  height="15"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" y="0" width="21" height="20" fill="#219653" />
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33313 10.479L10.3748 9.70821L11.6456 13.6249L7.33313 10.479ZM14.3331 5.41655H8.97896L7.33313 0.374878L5.6873 5.41655H0.33313L4.66646 8.54155L3.02063 13.5832L7.35396 10.4582L10.0206 8.54155L14.3331 5.41655Z"
                      fill="white"
                    />
                  </svg>
                </svg>
              ))}
              <span className="ml-1 text-xs font-bold">4.7</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
           <Image
                         src="/star.png"
                         alt="Logo"
                         width={40}
                         height={40}
                         className="h-full w-full "
                       />
          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">Sitejabber</div>
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM10 4.66667C10.1268 4.66662 10.2509 4.70273 10.3579 4.77074C10.4649 4.83875 10.5503 4.93586 10.604 5.05067L11.8933 7.8L14.7667 8.24C14.8877 8.25866 15.0012 8.31028 15.0948 8.38919C15.1884 8.46811 15.2585 8.57128 15.2973 8.68739C15.3361 8.80349 15.3422 8.92805 15.315 9.0474C15.2877 9.16675 15.2281 9.27629 15.1427 9.364L13.0453 11.5147L13.5427 14.56C13.5629 14.6836 13.5479 14.8104 13.4994 14.9259C13.4509 15.0413 13.3709 15.1408 13.2685 15.2129C13.166 15.285 13.0454 15.3267 12.9203 15.3334C12.7953 15.3401 12.6708 15.3114 12.5613 15.2507L10 13.8347L7.43867 15.2507C7.32905 15.3115 7.20448 15.3403 7.07927 15.3336C6.95406 15.3268 6.83328 15.2849 6.73081 15.2127C6.62833 15.1404 6.54831 15.0407 6.49994 14.925C6.45157 14.8093 6.4368 14.6824 6.45733 14.5587L6.95467 11.5147L4.856 9.364C4.77018 9.27624 4.71026 9.1665 4.68283 9.04686C4.65541 8.92722 4.66154 8.80233 4.70056 8.68595C4.73959 8.56958 4.80998 8.46624 4.90398 8.38731C4.99799 8.30839 5.11196 8.25695 5.23333 8.23867L8.10533 7.8L9.396 5.05067C9.44975 4.93586 9.53512 4.83875 9.6421 4.77074C9.74908 4.70273 9.87323 4.66662 10 4.66667Z"
                    fill="#DF7139"
                  />
                </svg>
              ))}
              <span className="ml-1 text-xs font-bold">4.0</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
          <svg width="" height="" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.528748 17.5454C0.528748 26.8523 8.20977 34.3983 17.6832 34.3983C27.1584 34.3983 34.8391 26.8523 34.8391 17.5454C34.8391 8.23688 27.1584 0.690918 17.6832 0.690918C8.20977 0.690918 0.528748 8.23688 0.528748 17.5454ZM12.469 20.5935C12.6493 20.0329 12.4488 19.4218 11.9692 19.0698C10.6995 18.1383 8.19627 16.3017 6.51425 15.0676C6.27145 14.8894 6.17217 14.5786 6.26774 14.2959C6.3633 14.0133 6.6321 13.8229 6.93534 13.8229H13.4547C14.0616 13.8229 14.5998 13.4407 14.7906 12.8751C15.3046 11.35 16.3261 8.31916 17.0035 6.31008C17.0987 6.02776 17.3672 5.83668 17.6701 5.83635C17.973 5.83601 18.2425 6.02611 18.3384 6.30809C19.0229 8.31882 20.0565 11.3547 20.5755 12.879C20.7677 13.4427 21.3049 13.8229 21.9101 13.8229C23.4523 13.8229 26.4233 13.8229 28.446 13.8229C28.7482 13.8229 29.017 14.0126 29.1129 14.2946C29.2088 14.5766 29.1109 14.8871 28.8691 15.0659C27.1922 16.307 24.6875 18.1602 23.4205 19.0977C22.9437 19.4503 22.7455 20.0604 22.9255 20.6191C23.4155 22.1392 24.3981 25.1876 25.062 27.2468C25.1546 27.5344 25.0465 27.8482 24.7949 28.0214C24.5434 28.1946 24.2067 28.1876 23.9629 28.0038C22.2782 26.7332 19.8168 24.8771 18.5278 23.9054C18.0209 23.5232 17.3158 23.5242 16.8103 23.9084C15.5339 24.8777 13.1059 26.7223 11.4354 27.9912C11.1922 28.176 10.8549 28.1843 10.6026 28.0111C10.3504 27.8383 10.2416 27.5244 10.3342 27.2365C10.9981 25.1713 11.9794 22.1176 12.469 20.5935Z" fill="black"/>
</svg>

          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">Reviews.io</div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-xs font-bold">5.0</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
          <svg  viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.0759 13.8525C5.17367 13.8694 6.23767 13.9961 7.28478 14.2156C8.19678 11.7414 8.56834 9.02231 8.2559 6.21875L0.985229 7.03786L1.33145 10.1454L5.8999 9.6303L4.05901 13.8441H4.0759V13.8525Z" fill="#3E1293"/>
<path d="M5.69728 0.776829C5.13151 1.71416 4.48973 2.5755 3.7804 3.37772C5.46928 5.40438 7.63951 7.08483 10.2151 8.21639L13.1368 1.5115L10.2657 0.261719L8.42484 4.4755L5.69728 0.776829Z" fill="#3E1293"/>
<path d="M16.2105 8.714C15.6785 7.75978 15.2563 6.76333 14.9185 5.75C12.3176 6.19756 9.77581 7.23622 7.5127 8.90822L11.8531 14.794L14.3696 12.9362L11.642 9.23755L16.2105 8.72244V8.714Z" fill="#C40A9E"/>
</svg>

          </div>
          <div className="text-sm font-semibold">
            <div className="text-gray-900">Review Centre</div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-xs font-bold">5.0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <button className="absolute -left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div className="font-semibold">John B.</div>
                <div className="flex h-6 w-6 items-center justify-center">
                  {i === 1 && (
                    <Image src = "/logo.png" alt="Logo" width={24} height={24} className="h-full w-full" />
                  )}
                  {i === 2 && (
                   <Image
                   src="/star.png"
                   alt="Logo"
                   width={40}
                   height={40}
                   className="h-full w-full "
                 />
                  )}
                  {i === 3 && (
                   <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0.800964 19.0498C0.800964 29.3366 9.29073 37.6771 19.7617 37.6771C30.2345 37.6771 38.7238 29.3366 38.7238 19.0498C38.7238 8.76113 30.2345 0.420654 19.7617 0.420654C9.29073 0.420654 0.800964 8.76113 0.800964 19.0498ZM13.9984 22.4188C14.1977 21.7991 13.976 21.1237 13.446 20.7347C12.0426 19.705 9.2758 17.6751 7.41668 16.3111C7.14832 16.1141 7.03858 15.7706 7.14421 15.4582C7.24984 15.1457 7.54694 14.9353 7.88211 14.9353H15.0879C15.7586 14.9353 16.3536 14.5129 16.5645 13.8877C17.1325 12.202 18.2616 8.85207 19.0103 6.63146C19.1156 6.31942 19.4123 6.10821 19.7471 6.10784C20.0819 6.10748 20.3797 6.31758 20.4857 6.62926C21.2423 8.8517 22.3848 12.2072 22.9585 13.8921C23.1709 14.5151 23.7647 14.9353 24.4335 14.9353C26.1381 14.9353 29.4219 14.9353 31.6576 14.9353C31.9917 14.9353 32.2888 15.145 32.3948 15.4567C32.5008 15.7684 32.3925 16.1116 32.1253 16.3092C30.2718 17.681 27.5034 19.7292 26.103 20.7655C25.576 21.1552 25.3569 21.8296 25.5559 22.4471C26.0974 24.1272 27.1836 27.4966 27.9174 29.7726C28.0196 30.0905 27.9002 30.4374 27.6221 30.6288C27.3441 30.8202 26.9719 30.8125 26.7025 30.6093C24.8404 29.205 22.1198 27.1534 20.6951 26.0794C20.1349 25.657 19.3556 25.6581 18.7968 26.0827C17.386 27.1541 14.7024 29.1929 12.8559 30.5954C12.5872 30.7996 12.2143 30.8088 11.9355 30.6174C11.6567 30.4264 11.5365 30.0795 11.6388 29.7612C12.3726 27.4786 13.4572 24.1033 13.9984 22.4188Z" fill="black"/>
                   </svg>
                   
                  )}
                </div>
              </div>

              <div className="mb-2 flex">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-xs font-bold">5.0</span>
              </div>

              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Proin ipsum dolor neque lobortis. Arcu libero elementum diam eu
                mollis adipiscing eget. Est a commodo ac id cursus pellentesque amet.
              </p>

              <button className="mt-2 text-xs font-medium text-purple-600">Show more</button>
            </div>
          ))}
        </div>

        <button className="absolute -right-5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <ChevronRight className="h-5 w-5 " />
        </button>
      </div>
    </section>
  )
}

