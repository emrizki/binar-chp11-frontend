import React from 'react';

import Newsletter from '../../components/user/Newsletter';
import Layout from '../../components/layout/Layout';
import withAuth from '../../HOC/withAuth';

const NewsletterPage = () => {
    return (
        <Layout title="Contact Us">
            <Newsletter />
        </Layout>
    );
};

export default withAuth(NewsletterPage);
