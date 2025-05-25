import React from 'react';

export const Location = () => (
    <>
        <iframe id="location-section"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2002.4220096025545!2d31.497291077395015!3d59.875342974883296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTnCsDUyJzMxLjIiTiAzMcKwMjknNTkuNSJF!5e0!3m2!1sru!2sru!4v1747987102626!5m2!1sru!2sru"
            width="100%"
            height="450"
            style={{ border: 0 }} // исправлено
            allowFullScreen // без "" и в camelCase
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </>
)