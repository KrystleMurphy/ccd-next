const stats = [
    { id: 1, name: 'Cervical cancer cases go undetected', value: '144,000' },
    { id: 2, name: 'False positives lead to unnecessary treatment.', value: '1.4 million' },
    { id: 3, name: 'Most common cancer in women', value: '4th' },
  ]
  
  export default function Stats() {
    return (
      <>
        <div id="stats" className="bg-white px-2 py-32 sm:py-40 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-ccDarkBlue sm:text-6xl">
              Detect Cancer Early with Advanced Technology
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our cutting-edge technology allows for the early detection of cervical cancer, providing patients with a higher chance of successful treatment. With our innovative approach, we are able to identify abnormalities at the earliest stage, ensuring timely intervention and improved outcomes.
            </p>
          </div>
        </div>
  
        <div className="bg-white pb-32 sm:pb-40">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-ccDarkBlue sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </>
    )
  }
  
  