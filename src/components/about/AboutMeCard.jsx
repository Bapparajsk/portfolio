'use client';

import { motion} from 'framer-motion';
// import { FaUserAstronaut } from 'react-icons/fa';
export default function AboutMe() {
    return (
        
            <div  className="h-full max-w-4xl text-center space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4 text-heading-1 text-neutral-700 dark:text-neutral-200"
                >
                    About Me
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg leading-relaxed text-neutral-600 dark:text-gray-300 text-paragraph"
                >
                    I’m a{' '}
                    <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> with a
                    passion for solving complex problems, building clean, scalable systems, and pushing the
                    boundaries of web technology. I’ve solved{' '}
                    <span className="text-yellow-400 font-bold">900+ LeetCode problems</span> sharpening my
                    algorithmic thinking.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-md leading-relaxed text-neutral-600 dark:text-gray-300 text-paragraph"
                >
                    I specialize in{' '}
                    <span className="text-blue-400">JavaScript</span>,{' '}
                    <span className="text-cyan-400">TypeScript</span>, and{' '}
                    <span className="text-pink-400">Java</span> — building full-stack apps using{' '}
                    <span className="text-green-400">Next.js</span>,{' '}
                    <span className="text-sky-400">React</span>, and{' '}
                    <span className="text-yellow-300">Express</span>. I love bringing UI to life with{' '}
                    <span className="text-pink-500">Framer Motion</span> and styling with{' '}
                    <span className="text-green-300">Tailwind CSS</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-md leading-relaxed text-neutral-600 dark:text-gray-300 text-paragraph"
                >
                    My focus is on building{' '}
                    <span className="text-purple-400">scalable backend services</span>, managing{' '}
                    <span className="text-yellow-400">cloud infrastructure</span>, and learning distributed
                    systems. I work with <span className="text-white font-semibold">AWS</span>,{' '}
                    <span className="text-blue-300">Google Cloud</span>,{' '}
                    <span className="text-indigo-300">MongoDB</span>, and{' '}
                    <span className="text-cyan-300">Redis</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-md text-neutral-500 dark:text-gray-500 italic text-paragraph"
                >
                    “Build. Break. Learn. Repeat.” 💡
                </motion.p>
            </div>
    );
}
