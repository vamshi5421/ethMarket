import { Hero } from '@components/ui/common';
import { CourseList, CourseCard } from '@components/ui/course';
import { BaseLayout } from '@components/ui/layout';
import { ownAllCourses } from '@content/courses/ownedfetcher';
import Image from 'next/image';

export default function Creator({ courses }) {
  return (
    <>
      <section className="lg:2/6 text-left my-28">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          Creators | Blockchain based course management system
        </div>
        {/* <div className="text-6xl font-semibold text-gray-900 leading-none">Grow your career as a developer</div> */}
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          A blockchain-based course management system is a decentralized
          platform that uses blockchain technology to manage and track the
          progress of students in a course. This system allows for secure and
          transparent record-keeping of important information related to the
          course. With a blockchain-based system, there is no need for a central
          authority to manage and verify the data, as the data is stored in a
          decentralized ledger that is resistant to tampering and modification.
          This provides added security and reliability compared to traditional
          centralized systems.
        </div>
      </section>
      <section>
        <div class="flex items-center h-screen w-full justify-center">
          <div class="max-w-xs"></div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              Joh Doe
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  const { data } = ownAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Creator.Layout = BaseLayout;
