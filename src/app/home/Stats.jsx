const stats = [
    { id: 1, des: 'Cervical cancer cases go undetected', name: '144,000' },
    { id: 2, des: 'False positives lead to unnecessary treatment.', name: '1.4 million' },
    { id: 3, des: 'Most common cancer in women', name: '4th' },
  ]
  
  export default function Stats() {
    return (
      <>
        <div id="stats" className="bg-white px-6 py-12 md:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-left sm:text-center">
            <h2 className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl max-2xl:text-5xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Detect Cancer Early with epigenetic DNA analysis
            </h2>
            <p className="mt-6 text-base max-sm:text-sm max-md:text-base max-2xl:text-lg max-sm:leading-5 text-gray-600 text-left sm:text-center">
              Our cutting-edge technology allows for the early detection of cervical cancer, providing patients with a higher chance of successful treatment. With our innovative approach, we are able to identify abnormalities at the earliest stage, ensuring timely intervention and improved outcomes.
            </p>
          </div>
        </div>
  
        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base max-sm:leading-5 leading-relaxed text-gray-600">{stat.des}</dt>
                  <dd className="order-first text-3xl leading-relaxed font-semibold tracking-tight text-ccDarkBlue sm:text-4xl">
                    {stat.name}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </>
    )
  }
  
  