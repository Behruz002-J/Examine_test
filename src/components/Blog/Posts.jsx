import BlogImg from '/src/assets/images/BlogPosts.png'
import BlogImg2 from '/src/assets/images/BlogPosts2.png'
import BlogImg3 from '/src/assets/images/BlogPost3.png'
import BlogImg4 from '/src/assets/images/BlogPosts4.png'
import BlogImg5 from '/src/assets/images/BlogPosts5.png'
import BlogImg6 from '/src/assets/images/BlogPosts6.png'
import Andrew from '/src/assets/images/Blog-anImage.png'

const blogs = [
  {
    id: 1,
    img:BlogImg,
    title: 'We aim to attain the greatest satisfaction for our clients',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    author: 'Andrew Jonson',
    date: 'January 2021',
  },
  {
    id: 2,
    img:BlogImg2,
    title: 'We aim to attain the greatest satisfaction for our clients',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    author: 'Andrew Jonson',
    date: 'January 2021',
  },
  {
    id: 3,
    img:BlogImg3,
    title: 'We aim to attain the greatest satisfaction for our clients',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    author: 'Andrew Jonson',
    date: 'January 2021',
  },
  {
    id: 4,
    img:BlogImg4,
    title: 'We aim to attain the greatest satisfaction for our clients',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    author: 'Andrew Jonson',
    date: 'January 2021',
  },
  {
    id: 5,
    img:BlogImg5,
    title: 'We aim to attain the greatest satisfaction for our clients',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    author: 'Andrew Jonson',
    date: 'January 2021',
  },
  {
    id: 6,
    img:BlogImg6,
    title: 'We aim to attain the greatest satisfaction for our clients',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    author: 'Andrew Jonson',
    date: 'January 2021',
  },
];

function Posts() {
  return (
    <>
      <section className="bg-[#F9F9F9] px-[96px] pb-[96px]">
        <div className='mt-[96px]'>
          <h2 className="text-[48px] font-semibold leading-[58px]">All posts</h2>
          <div className="grid grid-cols-3 gap-[32px]">
            {blogs.map((blog) => (
              <div key={blog.id} className="shadow-md mt-[64px]">
                <img src={blog.img} alt="" className="w-full h-[240px] object-cover" />
                <h4 className="text-[24px] leading-[36px] font-semibold pt-[32px] pl-[32px]">
                  {blog.title}
                </h4>
                <p className="text-[16px] leading-[24px] pl-[32px] pt-[16px]">
                  {blog.desc}
                </p>
                <div className="flex items-center pt-[24px] pl-[32px] gap-[12px]">
                  <img
                    className="w-[32px] h-[32px] rounded-full object-cover"
                    src={Andrew}
                    alt={blog.author}
                  />
                  <div>
                    <p className="text-[16px] font-semibold text-[#4A4A4A] leading-[24px]">
                      {blog.author}
                    </p>
                    <span className="text-[14px] text-[#7A7A7A] font-medium">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Posts