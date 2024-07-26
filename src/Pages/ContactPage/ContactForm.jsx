import styles from './contact.module.css';

export default function ContactForm() {
    return (
        <form action="" className="p-2 lg:col-span-2">
            <div className="pr-5 mb-4">
                <h1 className="text-2xl font-bold">Do you have any question?</h1>
            </div>

            <div className={`${styles.contactInputContainer} flex flex-col gap-y-6 md:grid md:grid-cols-3 md:gap-x-4`}>
                <input type="text" placeholder="Your Name" className='p-2 rounded-md' />
                <input type="text" placeholder="Your Email" className='p-2 rounded-md' />
                <input type="text" placeholder="Your Phone" className='p-2 rounded-md' />
                <textarea placeholder="Your Message" className={`${styles.contactTextArea} p-2 rounded-md md:col-span-4`}></textarea>

                <div>
                    <button className={`${styles.sendMessageBtn} rounded-md`}>Send Message</button>
                </div>
            </div>
        </form>
    )
}