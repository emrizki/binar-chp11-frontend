import React from 'react';

import ContactUs from '../../components/user/ContactUs';
import Layout from '../../components/layout/Layout';
import withAuth from '../../HOC/withAuth';

const ContactUsPage = () => {
    return (
        <Layout title="Contact Us">
            <ContactUs />
        </Layout>
    );
};

export default withAuth(ContactUsPage);
