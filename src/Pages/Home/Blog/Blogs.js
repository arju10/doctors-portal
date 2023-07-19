import React from 'react';
import Blog from './Blog';
import doctor from '../../../images/cristofer.jpg'
import doctor_2 from '../../../images/doctor_2.png'
import doctor_3 from '../../../images/doctor_3.png'
const Blogs = () => {
    const blogsData = [
        {
            id:1,
            name:"Dr. Caudi",
            image:doctor ,
            date: "15 July, 2023",
            title:"How to Recover Cancer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet omnis illo odit temporibus esse quidem maiores aliquam at inventore."
        },
        {
            id:2,
            name:"Dr. Michel",
            image:doctor_2 ,
            date: "15 July, 2023",
            title:"5 Way to Keep Healthy",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet omnis illo odit temporibus esse quidem maiores aliquam at inventore."
        },
        {
            id:3,
            name:"Dr. Daud",
            image:doctor_3 ,
            date: "15 July, 2023",
            title:"Keep Smiling",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet omnis illo odit temporibus esse quidem maiores aliquam at inventore."
        },
    ]
    return (
        <>
        <div className="text-center py-20">
            <h3 className="text-accent font-bold ">OUR BLOGS</h3>
            <h1 className="text-base-content font-bold text-3xl">FROM OUR BLOG NEWS</h1>
        </div>
        <div className="flex justify-center pt-4">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {blogsData.map((blog) => (
                    <div key={blog.id} className="flex justify-center">
                        <Blog blog={blog} />
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};

export default Blogs;