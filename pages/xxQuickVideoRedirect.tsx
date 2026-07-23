import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRotations } from '../services/curriculumService';

const QuickVideoRedirect: React.FC = () => {
    const { rotationId, beltName } = useParams<{ rotationId: string; beltName: string }>();
    const allRotations = getRotations();

    // Find the rotation by the number ID (1, 2, 3, 4)
    const rotation = allRotations.find(r => r.id === Number(rotationId));

    // Find the form where the belt name matches what's in the URL
    const form = rotation?.forms.find(f => 
        f.belt.toLowerCase().includes(beltName?.toLowerCase() || "")
    );

    useEffect(() => {
        if (form?.video_url) {
            // This forces the browser to leave your app and go to the external URL
            window.location.replace(form.video_url);
        }
    }, [form]);

    if (!rotation || !form) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: '#ew-gold' }}>
                <h2>Form Not Found</h2>
                <p>Could not find <strong>{beltName}</strong> for <strong>Rotation {rotationId}</strong>.</p>
                <a href="/" style={{ color: 'white', textDecoration: 'underline' }}>Return to Home</a>
            </div>
        );
    }

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <p>Loading Video...</p>
        </div>
    );
};

export default QuickVideoRedirect;