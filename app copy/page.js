import { use, useEffect } from 'react';
import CategoryTiles from '../components/CategoryTiles'
import ProfileCard from '../components/ProfileCard'
import Image from 'next/image';

const categories = [
  { slug: 'independent-escorts', label: 'Independent', tagline: 'Verified Indian Escorts' },
  { slug: 'vip', label: 'VIP', tagline: 'Luxury Companions' },
  { slug: 'russian', label: 'Russian', tagline: 'International' },
  { slug: 'agency', label: 'Agency', tagline: 'Agency Verified' },
  { slug: 'college', label: 'College', tagline: 'Friendly Companions' },
  { slug: 'blonde', label: 'Blonde', tagline: 'International Look' },
  { slug: 'student', label: 'Student', tagline: 'Young & Fresh' },
  { slug: 'part-time', label: 'Part-time', tagline: 'Flexible Timings' },
  { slug: 'massage', label: 'Massage', tagline: 'Professional Massage' },
  { slug: 'vip-elite', label: 'VIP Elite', tagline: 'Premium & Luxury' }
]

export default async function Home() {
  // i want to fetch featured profiles from api endpoint /api/featured-profiles with proper loading feature as well try catch block
  const [profiles, setProfiles] = [];
  const [isLoading, setIsLoading] = false;

  useEffect(() => {
    setIsLoading(true);
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, { cache: 'no-store' });
      const data = await res.json();
      setProfiles(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    // <>
    //   <section className="mb-8">
    //     <div className="bg-[url('/images/jaipur-hero.jpg')] bg-cover bg-center rounded h-64 flex items-center">
    //       <div className="bg-black/40 p-6 rounded ml-6">
    //         <h1 className="text-white text-3xl font-bold">Jaipur Escorts – Verified & Professional Companions</h1>
    //         <p className="text-white mt-2">Find professional companions in Jaipur — discreet & verified.</p>
    //         <a href="/jaipur" className="mt-4 inline-block bg-amber-500 text-black py-2 px-4 rounded">Explore Escorts in Jaipur</a>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mb-8">
    //     <h2 className="text-xl font-semibold mb-4">Categories</h2>
    //     <CategoryTiles categories={categories} />
    //   </section>

    //   <section className="mb-8">
    //     <h2 className="text-xl font-semibold mb-4">Featured Profiles</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    //       {profiles.length ? profiles.map(p => <ProfileCard key={p.id} p={p} />) : <div>No featured profiles available.</div>}
    //     </div>
    //   </section>

    //   <section className="mb-8 bg-gray-50 p-6 rounded">
    //     <h3 className="font-semibold">Why Choose Us</h3>
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    //       <div><strong>Verified Profiles</strong><p className="text-sm">Profiles verified by our team.</p></div>
    //       <div><strong>Fast Contact</strong><p className="text-sm">Direct Call/WhatsApp buttons.</p></div>
    //       <div><strong>Privacy</strong><p className="text-sm">We keep your data private.</p></div>
    //       <div><strong>24x7 Support</strong><p className="text-sm">Contact us anytime.</p></div>
    //     </div>
    //   </section>
    // </>
    <>
      <div className="main overflow-hidden">

        {/* Banner Section */}
        <section className="banner-section position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="main-banner-content text-center">
                  <h1 className="banner-heading fw-600 fs-40">
                    <span className="primary-color">Jaipur Escorts –</span> Verified & Professional Companions
                  </h1>
                  <p className="banner-text fs-20">
                    Seek whatever your heart desires, experience the passionate side of Celebrity Escorts in Jaipur, and let us take care of your stresses.
                  </p>
                  <a href="#" className="banner-btn btn common-btn">
                    Explore Escorts in Jaipur
                  </a>
                </div>

                <div className="banner-input-form">
                  <input type="text" id="bannerInput" placeholder="Looking for?" />
                  <button className="banner-search-btn btn">Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section className="category-section position-relative section-padding">
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2 className="section-title fs-30 fw-600">Explore by Category</h2>
                </div>
              </div>
            </div>

            <div className="row category-row gy-4">
              {/* Example Category Item */}
              <div className="row category-row gy-4">
                {categories.map((category, index) => (
                  <div className="col-sm-6 col-md-4 col-lg-3 category-col" key={index}>
                    <div className="category-items h-100 slow-effect">
                      <div className="category-image position-relative overflow-hidden">
                        <a href="#"> <img className="slow-effect" src={category.image} alt="" /></a>
                      </div>
                      <div className="category-content text-center">
                        <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                          <img className="me-2" src={category.icon} alt="" />
                          <a href="#" className="category-links fw-600 position-relative">{category.label} </a>
                        </div>
                        <p className="m-0 slow-effect">{category.tagline}</p> 
                      </div>          
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Independent Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Verified Indian Escorts</p>
                    </div>
                  </div>
                ))}
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/russian_escorts.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Russian Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Luxury Foreign Companions</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"> <img className="slow-effect" src="img/category/vip_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">VIP Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Elite High-Class Models</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/college_girl_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">College Girls Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Young, Fresh & Fun</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"> <img className="slow-effect" src="img/category/housewife_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Housewife Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Mature & Discreet Partners</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/modal_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Model Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Fashion Diva Companions</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/call_girl_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Call Girls in Jaipur </a>
                      </div>
                      <p className="m-0 slow-effect">24×7 Available Companions</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/luxury_Escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Luxury Escorts </a>
                      </div>
                      <p className="m-0 slow-effect">Premium & Private Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/erotic_massages_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative">Erotic Massages </a>
                      </div>
                      <p className="m-0 slow-effect">Sensual Relaxation</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 category-col">
                  <div className="category-items h-100 slow-effect">
                    <div className="category-image position-relative overflow-hidden">
                      <a href="#"><img className="slow-effect" src="img/category/adult_escort.png" alt="" /></a>
                    </div>
                    <div className="category-content text-center">
                      <div className="items-heading d-flex flex-wrap align-items-center slow-effect justify-content-center">
                        <img className="me-2" src="img/category/Independen_icon.svg" alt="" />
                        <a href="#" className="category-links fw-600 position-relative"> Adult Meetings</a>
                      </div>
                      <p className="m-0 slow-effect">Private Encounters</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat other category items similarly... */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="home-about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="about-image mb-4 mb-md-0">
                  <img src="/img/resources/home_about.png" alt="" />
                </div>
              </div>
              <div className="col-md-8 offset-md-1">
                <div className="about-home-content">
                  <div className="section-heading">
                    <h3 className="section-title fs-30 fw-600 primary-color">About Our Agency</h3>
                  </div>
                  <p className="m-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Profiles Section */}
        <section className="feature-section position-relative section-padding overflow-hidden">
          <img className="feature-bg-shape updown-anim position-absolute" src="/img/shapes/round_bg_shape.webp" alt="" />
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h3 className="section-title fs-30 fw-600">Featured Profiles</h3>
                </div>
              </div>
            </div>

            <div className="row gy-4">
              {/* Example Feature Item */}
              <div className="row gy-4">
                {[
                  { name: "Minakshi Sharma", img: "/img/feature/feature_img1.png" },
                  { name: "Amrita Roi", img: "/img/feature/feature_img2.png" },
                  { name: "Moonlika", img: "/img/feature/feature_img3.png" },
                  { name: "Shradha", img: "/img/feature/feature_img4.png" },
                  { name: "Jaya Ray", img: "/img/feature/feature_img5.png" },
                  { name: "Jack Smith", img: "/img/feature/feature_img6.png" },
                ].map((person, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4">
                    <div className="feature-items h-100 slow-effect">
                      <div className="feature-image position-relative overflow-hidden d-block">
                        <a href="#">
                          <img className="slow-effect" src={person.img} alt={person.name} />
                        </a>
                      </div>
                      <div className="feature-content">
                        <div className="feature-area d-flex flex-wrap justify-content-between position-relative mb-3 pb-3 slow-effect">
                          <a href="#" className="feature-links fw-600">{person.name}</a>
                          <p className="feature-location m-0 text-end">Tonk Road, Jaipur</p>
                        </div>
                        <div className="feature-btns d-flex flex-wrap justify-content-between">
                          <a className="common-btn btn primary-btn" href="#">
                            <i className="fa-solid fa-phone"></i> +91XXXXXXXXXX
                          </a>
                          <a className="common-btn btn whatsapp-outer-btn" href="#">
                            <i className="fa-brands fa-whatsapp"></i> +91XXXXXXXXXX
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Repeat other featured profiles similarly */}
            </div>
          </div>
        </section>

        <section className="Post-add-banner">
          <div className="container">
            <div className="row m-0">
              <Image src="/img/resources/post_banner.png" alt="Post Banner" width={1200} height={400} />
            </div>
          </div>
        </section>

        <section className="choose-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h4 className="section-title fs-30 fw-600">Why Choose Us</h4>
                </div>
              </div>
            </div>
            <div className="row gy-3">
              {[
                { icon: '/img/icons/verified_profile.svg', title: 'Verified Profiles', desc: 'We ensure all profiles are verified for your peace of mind.' },
                { icon: '/img/icons/fast_contact.svg', title: 'Fast Contact', desc: 'Quick and easy ways to get in touch with our team.' },
                { icon: '/img/icons/privacy.svg', title: 'Privacy', desc: 'Your information is safe and secure with us.' },
                { icon: '/img/icons/support.svg', title: '24x7 Support', desc: 'Our support team is always available for you.' },
              ].map((item, index) => (
                <div className="col-sm-6 col-lg-3" key={index}>
                  <div className="choose-items text-center slow-effect">
                    <div className="choose-icon mb-3">
                      <Image src={item.icon} alt={item.title} width={60} height={60} />
                    </div>
                    <div className="choose-heading fs-20 mb-2 fw-600">{item.title}</div>
                    <p className="m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="esj-section position-relative section-padding pt-3 pt-lg-5">
          <Image className="position-absolute bg-shape1" src="/img/shapes/bg_hape.png" alt="Background Shape" width={500} height={500} />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="esj-images updown-anim">
                  <Image src="/img/resources/esj_img.png" alt="ESJ" width={500} height={500} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="esj-content">
                  <div className="section-heading mb-3">
                    <h4 className="section-title fs-30 fw-600">
                      What should I expect when using <span className="primary-color">ESJ?</span>
                    </h4>
                  </div>
                  <p className="fs-18">
                    Expect a wide variety of services and features designed to make your experience seamless and enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-padding pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="faqs-panel">
                  <div className="section-heading">
                    <h4 className="section-title fs-30 fw-600">Frequently Asked Questions (FAQ)</h4>
                  </div>
                  <div className="accordion" id="accordionExample">
                    {[
                      'What services do you offer?',
                      'How can I contact support?',
                      'Is my information secure?',
                      'How do I get started?',
                      'Can I change my plan later?'
                    ].map((question, i) => (
                      <div className="accordion-item faq-single-items" key={i}>
                        <button
                          className={`accordion-button faq-btn fw-600 fs-22 ${i === 0 ? '' : 'collapsed'}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${i}`}
                          aria-expanded={i === 0 ? 'true' : 'false'}
                          aria-controls={`collapse${i}`}
                        >
                          {question}
                        </button>
                        <div
                          id={`collapse${i}`}
                          className={`accordion-collapse collapse faqs-collapse ${i === 0 ? 'show' : ''}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body faq-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="faqs-image text-center text-lg-end">
                  <Image src="/img/resources/faqs_imge.png" alt="FAQ Image" width={400} height={400} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="post-image">
                  <Image src="/img/resources/post_adds2.png" alt="Post Banner" width={1200} height={400} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
