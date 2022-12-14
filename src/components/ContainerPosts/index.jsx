import CardPost from '../CardPost'

export default function ContainerPosts({data}) {
    return (
        <>
            <div className='show-cards'>
                {
                    data.map((d, index)=>{
                        return (
                            <CardPost
                                data={d}
                                key={index}
                            />
                        )
                    }) || null
                }
            </div>
            <img src="/image/banner-get.jpg" alt="banner para o site get"  className='banner-get' data-aos='fade-up'/>
        </>
    )
}