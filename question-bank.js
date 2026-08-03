// ============================================================
// QUESTION BANK - Probability I
// ============================================================

(function forceLoadQuestionBank() {
    try {
        console.log("📚 Force-loading Probability question bank...");

        // ========== YOUR QUESTIONS ==========
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

        // ========== PARSER ==========
        function parseQuestions(text) {
            const lines = text.split('\n');
            const questions = [];
            let currentTopic = 'general';
            let currentQuestion = null;
            let currentOptions = {};
            let explanation = [];
            let inExplanation = false;
            let inOptions = false;

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trimRight();
                let trimmed = line.trim();

                if (trimmed === '') {
                    if (currentQuestion && currentQuestion.text) {
                        if (explanation.length > 0) {
                            currentQuestion.explanation = explanation.join('\n');
                            explanation = [];
                        }
                        if (currentQuestion.type === 'mcq' && Object.keys(currentOptions).length === 4) {
                            currentQuestion.options = { ...currentOptions };
                            currentQuestion.answer = currentQuestion.answer || '';
                            questions.push({ ...currentQuestion, topic: currentTopic });
                        } else if (currentQuestion.type === 'fill' && currentQuestion.answer) {
                            questions.push({ ...currentQuestion, topic: currentTopic });
                        }
                        currentQuestion = null;
                        currentOptions = {};
                        inOptions = false;
                        inExplanation = false;
                    }
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('topic:')) {
                    currentTopic = trimmed.substring(6).trim() || 'general';
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('type:')) {
                    let type = trimmed.substring(5).trim().toLowerCase();
                    if (type === 'mcq' || type === 'fill') {
                        currentQuestion = { type: type, text: '', answer: '', explanation: '' };
                        inOptions = (type === 'mcq');
                        inExplanation = false;
                        currentOptions = {};
                    }
                    continue;
                }

                if (trimmed.match(/^Q\d+:/i)) {
                    if (currentQuestion) {
                        currentQuestion.text = trimmed.substring(trimmed.indexOf(':') + 1).trim();
                    }
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('option:')) {
                    inOptions = true;
                    let optionText = trimmed.substring(7).trim();
                    let match = optionText.match(/^([A-D]):\s*(.+)$/i);
                    if (match) {
                        currentOptions[match[1].toUpperCase()] = match[2].trim();
                    }
                    continue;
                }

                if (inOptions) {
                    let match = trimmed.match(/^([A-D]):\s*(.+)$/i);
                    if (match) {
                        currentOptions[match[1].toUpperCase()] = match[2].trim();
                        continue;
                    }
                    let indentMatch = trimmed.match(/^\s+([A-D]):\s*(.+)$/i);
                    if (indentMatch) {
                        currentOptions[indentMatch[1].toUpperCase()] = indentMatch[2].trim();
                        continue;
                    }
                    inOptions = false;
                }

                if (trimmed.toLowerCase().startsWith('answer:')) {
                    if (currentQuestion) {
                        currentQuestion.answer = trimmed.substring(7).trim();
                    }
                    inExplanation = false;
                    continue;
                }

                if (trimmed.toLowerCase().startsWith('explanation:')) {
                    inExplanation = true;
                    let expText = trimmed.substring(11).trim();
                    explanation = expText ? [expText] : [];
                    continue;
                }

                if (inExplanation) {
                    explanation.push(line);
                    continue;
                }
            }

            if (currentQuestion && currentQuestion.text) {
                if (explanation.length > 0) {
                    currentQuestion.explanation = explanation.join('\n');
                }
                if (currentQuestion.type === 'mcq' && Object.keys(currentOptions).length === 4) {
                    currentQuestion.options = { ...currentOptions };
                    questions.push({ ...currentQuestion, topic: currentTopic });
                } else if (currentQuestion.type === 'fill' && currentQuestion.answer) {
                    questions.push({ ...currentQuestion, topic: currentTopic });
                }
            }
            return { questions };
        }

        // ========== IMPORTER ==========
        function importToApp() {
            const result = parseQuestions(MY_QUESTION_BANK);
            if (result.questions.length === 0) {
                console.warn("⚠️ No valid questions parsed.");
                return;
            }

            const subjectName = "Probability I";
            const newSubject = {
                id: 'subject_' + Date.now(),
                name: subjectName,
                duration: 30,
                questions: [],
                topics: [],
                notes: {},
                topicImages: {}
            };

            const topicMap = {};

            result.questions.forEach(q => {
                let topicName = q.topic || 'General';
                let topicId = topicMap[topicName];
                if (!topicId) {
                    topicId = 'topic_' + Date.now() + '_' + Math.random();
                    topicMap[topicName] = topicId;
                    newSubject.topics.push({ id: topicId, name: topicName });
                }

                const appQuestion = {
                    id: Date.now() + Math.random(),
                    text: q.text,
                    type: q.type === 'mcq' ? 'objective' : 'fill',
                    topicId: topicId,
                    correct: q.answer,
                    explanation: q.explanation || ''
                };

                if (q.type === 'mcq') {
                    appQuestion.options = q.options;
                } else {
                    appQuestion.options = null;
                }

                newSubject.questions.push(appQuestion);
            });

            // Add the new subject to the app's data
            if (window.app && window.app.data && window.app.data.subjects) {
                window.app.data.subjects[newSubject.id] = newSubject;
                window.app.saveSubjects();
                console.log(`✅ Force-imported ${newSubject.questions.length} questions into "${subjectName}"`);
                
                // Refresh the page to show the new questions
                if (window.app.showLanding) {
                    setTimeout(() => window.app.showLanding(), 200);
                }
            } else {
                console.warn("⚠️ App not ready. Storing subject for later import...");
                // Store for later import
                if (!window._pendingSubjects) window._pendingSubjects = [];
                window._pendingSubjects.push(newSubject);
            }
        }

        // Try to import immediately, or wait for app to be ready
        if (window.app && window.app.data) {
            importToApp();
        } else {
            // Wait for app to initialize
            const checkApp = setInterval(() => {
                if (window.app && window.app.data) {
                    clearInterval(checkApp);
                    importToApp();
                }
            }, 100);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(checkApp);
                if (window._pendingSubjects && window._pendingSubjects.length > 0) {
                    console.warn("⚠️ App not ready after timeout. Stored subjects:", window._pendingSubjects.length);
                }
            }, 5000);
        }

    } catch (e) {
        console.warn("Question bank import failed:", e.message);
    }
})();