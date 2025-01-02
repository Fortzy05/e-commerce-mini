import { MainLayout } from '@/layout/MainLayout';
import ContactUsCard from '@/sections/contact/ContactUsCard';
import MessageBox from '@/sections/contact/MessageBox';

const ContactPage = () => {
    return (
        <MainLayout>
            <section className="container-main flex space-x-4 gap-2">
                <ContactUsCard />
                <MessageBox />
            </section>
        </MainLayout>
    );
};

export default ContactPage;
