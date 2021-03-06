import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import ImageUploadPage from 'flagrow/image-upload/components/ImageUploadPage';

export default function() {
    app.routes['image-upload'] = {path: '/image-upload', component: ImageUploadPage.component()};

    app.extensionSettings['flagrow-image-upload'] = () => m.route(app.route('image-upload'));

    extend(AdminNav.prototype, 'items', items => {
        // add the Image Upload tab to the admin navigation menu
        items.add('image-upload', AdminLinkButton.component({
            href: app.route('image-upload'),
            icon: 'picture-o',
            children: 'Image Upload',
            description: 'Set up image uploading services and preferences.'
        }));
    });
}
