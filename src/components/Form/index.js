import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { FaClipboard } from 'react-icons/fa';

import './index.css';

const Form = () => {
    const [repositoryName, setRepositoryName] = useState('');
    const [description, setDescription] = useState('');
    const [gitCloneText, setGitCloneText] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/repo', {
            username: 'willianleman@hotmail.com',
            password: 'American_1995',
            repositoryName,
            description,
        });

        setGitCloneText(response.data);
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                placeholder="Nome do Repositório"
                value={repositoryName}
                onChange={(event) => setRepositoryName(event.target.value)}
            />
            <textarea
                placeholder="Descrição"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button>Gerar Repo</button>

            <section className="gitclonetext-container">
                <div className="clip-container">
                    <input
                        type="text"
                        value={gitCloneText}
                    /> <FaClipboard className="clipIcon" />
                </div>
            </section>
        </form>
    );
};

export default Form;