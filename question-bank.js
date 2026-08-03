// ============================================
// QUESTION BANK IMPORTER (Developer Tool)
// ============================================
const MY_QUESTION_BANK = `

Subject: Probability I
Topic: Probability Space & Theorems
Type: MCQ
Q001: Define a sample space. What is the sample space for tossing a single fair coin?
Option: A: The set of all possible outcomes of an experiment; {Heads, Tails}
Option: B: The set of all possible outcomes of an experiment; {Tails}
Option: C: The set of favorable outcomes; {Heads, Tails}
Option: D: The set of all possible outcomes of an experiment; {Heads}
Answer: A
Explanation: A sample space is defined as the set of all possible outcomes of a random experiment. For a single fair coin toss, there are exactly two possible outcomes: Heads and Tails. Therefore, the sample space is {Heads, Tails}.

Type: MCQ
Q002: What is an event in probability? Give an example using a standard six-sided die.
Option: A: A subset of the sample space; Rolling a number greater than 4 is {5, 6}
Option: B: The complement of an outcome; Rolling a number greater than 4 is {1, 2, 3, 4}
Option: C: The total number of outcomes; Rolling a number greater than 4 is 2
Option: D: The probability of an outcome; Rolling a number greater than 4 is \\( \\frac{1}{3} \\)
Answer: A
Explanation: An event is defined as any subset of the sample space. For a six-sided die, the sample space is {1, 2, 3, 4, 5, 6}. Rolling a number greater than 4 includes the outcomes {5, 6}, which is a valid subset.

Topic: Probability Spacious
Type: MCQ
Q001: Define a sample space. What is the sample space for tossing a single fair coin?
Option: A: The set of all possible outcomes of an experiment; {Heads, Tails}
Option: B: The set of all possible outcomes of an experiment; {Tails}
Option: C: The set of favorable outcomes; {Heads, Tails}
Option: D: The set of all possible outcomes of an experiment; {Heads}
Answer: A
Explanation: A sample space is defined as the set of all possible outcomes of a random experiment. For a single fair coin toss, there are exactly two possible outcomes: Heads and Tails. Therefore, the sample space is {Heads, Tails}.

Type: MCQ
Q002: What is an event in probability? Give an example using a standard six-sided die.
Option: A: A subset of the sample space; Rolling a number greater than 4 is {5, 6}
Option: B: The complement of an outcome; Rolling a number greater than 4 is {1, 2, 3, 4}
Option: C: The total number of outcomes; Rolling a number greater than 4 is 2
Option: D: The probability of an outcome; Rolling a number greater than 4 is \\( \\frac{1}{3} \\)
Answer: A
Explanation: An event is defined as any subset of the sample space. For a six-sided die, the sample space is {1, 2, 3, 4, 5, 6}. Rolling a number greater than 4 includes the outcomes {5, 6}, which is a valid subset.

`;

(function setupMathJax() {
    window.MathJax = {
        tex: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']], packages: { '[+]': ['mhchem', 'ams'] } },
        options: { ignoreHtmlClass: 'no-mathjax', processHtmlClass: 'mathjax' },
        startup: { pageReady: function() { console.log('MathJax loading...'); return MathJax.startup.defaultPageReady(); } }
    };
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
    console.log('âœ… MathJax script loaded');
})();

(function loadQuestionBank() {
    function waitForApp() {
        if (typeof app === 'undefined' || !app.data) { setTimeout(waitForApp, 200); return; }
        console.log('ðŸ“š Loading question bank with MathJax support...');

        function parseQuestions(text) {
            const lines = text.split('\n');
            const subjects = {};
            let currentSubject = null;
            let currentTopic = null;
            let currentQuestion = null;
            let currentOptions = {};
            let explanationLines = [];
            let readingExplanation = false;

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trim();
                if (line === '' || line.startsWith('===')) continue;

                if (line.match(/^Subject:/i)) {
                    if (currentQuestion) finalizeQuestion();
                    const subjectName = line.substring(8).trim();
                    if (subjectName) {
                        let existingSubject = null;
                        for (let id in app.data.subjects) {
                            if (app.data.subjects[id].name === subjectName) {
                                existingSubject = app.data.subjects[id];
                                break;
                            }
                        }
                        if (existingSubject) {
                            currentSubject = existingSubject;
                        } else {
                            const newId = 'subj_' + Date.now() + '_' + Math.random();
                            currentSubject = {
                                id: newId,
                                name: subjectName,
                                duration: 30,
                                questions: [],
                                topics: [],
                                notes: {},
                                topicImages: {}
                            };
                            subjects[newId] = currentSubject;
                        }
                    }
                    continue;
                }

                if (!currentSubject) continue;

                if (line.match(/^Topic:/i)) {
                    if (currentQuestion) finalizeQuestion();
                    const topicName = line.substring(6).trim();
                    if (topicName) {
                        let existingTopic = currentSubject.topics.find(t => t.name === topicName);
                        if (!existingTopic) {
                            existingTopic = {
                                id: 'topic_' + Date.now() + '_' + Math.random(),
                                name: topicName
                            };
                            currentSubject.topics.push(existingTopic);
                        }
                        currentTopic = existingTopic;
                    }
                    continue;
                }

                if (line.match(/^Type:/i)) {
                    if (currentQuestion) finalizeQuestion();
                    const type = line.substring(5).trim().toLowerCase();
                    currentQuestion = {
                        id: Date.now() + Math.random(),
                        text: '',
                        type: type === 'mcq' ? 'objective' : 'fill',
                        correct: '',
                        explanation: '',
                        options: type === 'mcq' ? {} : null,
                        topicId: currentTopic ? currentTopic.id : 'general'
                    };
                    currentOptions = {};
                    explanationLines = [];
                    readingExplanation = false;
                    continue;
                }

                if (!currentQuestion) continue;

                const qMatch = line.match(/^Q\d+:\s*(.*)$/i);
                if (qMatch) {
                    currentQuestion.text = qMatch[1].trim();
                    continue;
                }

                let optMatch = line.match(/^Option:\s*([A-D]):\s*(.*)$/i);
                if (!optMatch && currentQuestion.type === 'objective') {
                    optMatch = line.match(/^([A-D]):\s*(.*)$/i);
                }
                if (optMatch && currentQuestion.type === 'objective') {
                    const letter = optMatch[1].toUpperCase();
                    const text = optMatch[2].trim();
                    currentQuestion.options[letter] = text;
                    continue;
                }

                const ansMatch = line.match(/^Answer:\s*(.*)$/i);
                if (ansMatch) {
                    currentQuestion.correct = ansMatch[1].trim();
                    readingExplanation = false;
                    continue;
                }

                const expMatch = line.match(/^Explanation:\s*(.*)$/i);
                if (expMatch) {
                    readingExplanation = true;
                    const expText = expMatch[1].trim();
                    if (expText) explanationLines.push(expText);
                    continue;
                }

                if (readingExplanation && line) {
                    explanationLines.push(line);
                }
            }

            function finalizeQuestion() {
                if (currentQuestion && currentQuestion.text) {
                    if (explanationLines.length > 0) {
                        currentQuestion.explanation = explanationLines.join(' ');
                    }
                    if (currentQuestion.type === 'objective') {
                        const optionCount = Object.keys(currentQuestion.options).length;
                        if (optionCount >= 2 && currentQuestion.correct) {
                            currentSubject.questions.push({ ...currentQuestion });
                        }
                    } else if (currentQuestion.type === 'fill') {
                        if (currentQuestion.correct) {
                            currentSubject.questions.push({ ...currentQuestion });
                        }
                    }
                }
                currentQuestion = null;
                currentOptions = {};
                explanationLines = [];
                readingExplanation = false;
            }

            finalizeQuestion();

            for (let id in subjects) {
                if (subjects[id].topics.length === 0) {
                    subjects[id].topics.push({ id: 'general', name: 'General' });
                }
            }

            return subjects;
        }

        function importToApp() {
            const newSubjects = parseQuestions(MY_QUESTION_BANK);
            let totalNewSubjects = 0;
            let totalTopics = 0;
            let totalQuestions = 0;

            for (let id in newSubjects) {
                const newSubj = newSubjects[id];
                let existingSubjectId = null;
                for (let existingId in app.data.subjects) {
                    if (app.data.subjects[existingId].name === newSubj.name) {
                        existingSubjectId = existingId;
                        break;
                    }
                }

                if (existingSubjectId) {
                    const existingSubj = app.data.subjects[existingSubjectId];
                    newSubj.topics.forEach(newTopic => {
                        if (!existingSubj.topics.find(t => t.name === newTopic.name)) {
                            existingSubj.topics.push(newTopic);
                        }
                    });
                    const topicMap = {};
                    existingSubj.topics.forEach(t => { topicMap[t.name] = t.id; });
                    newSubj.questions.forEach(q => {
                        const mappedTopicId = topicMap[q.topicId] || 'general';
                        existingSubj.questions.push({
                            ...q,
                            id: Date.now() + Math.random(),
                            topicId: mappedTopicId
                        });
                    });
                    totalTopics += newSubj.topics.length;
                    totalQuestions += newSubj.questions.length;
                } else {
                    app.data.subjects[id] = newSubj;
                    totalNewSubjects++;
                    totalTopics += newSubj.topics.length;
                    totalQuestions += newSubj.questions.length;
                }
            }

            app.saveSubjects();
            console.log(`âœ… IMPORT COMPLETE: ${totalNewSubjects} new subject(s), ${totalTopics} topic(s), ${totalQuestions} question(s)`);
            if (app.showNotification) {
                app.showNotification(`ðŸ“š Imported ${totalQuestions} questions! MathJax enabled.`, 'success');
            }
            if (app.data.mode === 'admin') {
                setTimeout(() => app.showAdminSubjects(), 500);
            }
        }

        importToApp();
    }
    waitForApp();
})();

(function autoRenderMathJax() {
    function renderMath() {
        if (window.MathJax) {
            const container = document.getElementById('app-container');
            if (container) {
                MathJax.typesetPromise([container]).catch(e => console.warn('Render error:', e));
            }
        }
    }

    function patchAppMethod(methodName) {
        if (app && app[methodName]) {
            const original = app[methodName];
            app[methodName] = function() {
                const result = original.apply(this, arguments);
                setTimeout(renderMath, 200);
                return result;
            };
        }
    }

    function patchAll() {
        const methods = ['renderQuestion', 'showResult', 'showFullReview', 'viewTopicNote', 'showSubjectDashboard', 'showLanding', 'showTestInterface'];
        methods.forEach(patchAppMethod);
    }

    if (typeof app !== 'undefined') {
        patchAll();
    } else {
        const checkApp = setInterval(() => {
            if (typeof app !== 'undefined') {
                clearInterval(checkApp);
                patchAll();
            }
        }, 100);
    }

    const observer = new MutationObserver(() => renderMath());
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('âœ… Auto-MathJax rendering enabled');
})();
