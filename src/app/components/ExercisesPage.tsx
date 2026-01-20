import { CheckCircle, XCircle, Lightbulb, Trophy, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ExercisesPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const questions = [
    {
      id: 1,
      question: "Quelle est la fraction simplifiée de 4/8 ?",
      options: ["1/2", "2/4", "3/6", "4/8"],
      correctAnswer: 0,
      explanation: "4/8 peut être simplifié en divisant le numérateur et le dénominateur par 4, ce qui donne 1/2."
    },
    {
      id: 2,
      question: "Combien font 1/3 + 1/3 ?",
      options: ["1/6", "2/3", "1/9", "3/3"],
      correctAnswer: 1,
      explanation: "Quand on additionne des fractions avec le même dénominateur, on additionne les numérateurs : 1/3 + 1/3 = 2/3."
    },
    {
      id: 3,
      question: "Quelle fraction est la plus grande : 1/2 ou 1/4 ?",
      options: ["1/4", "1/2", "Elles sont égales", "On ne peut pas comparer"],
      correctAnswer: 1,
      explanation: "1/2 représente la moitié, tandis que 1/4 représente un quart. La moitié est plus grande qu'un quart."
    },
    {
      id: 4,
      question: "Quelle est la fraction équivalente à 3/6 ?",
      options: ["1/2", "2/3", "3/4", "1/3"],
      correctAnswer: 0,
      explanation: "3/6 peut être simplifié en divisant par 3, ce qui donne 1/2. Ce sont des fractions équivalentes."
    },
    {
      id: 5,
      question: "Si tu as mangé 2/8 d'une pizza, quelle fraction reste-t-il ?",
      options: ["2/8", "6/8", "4/8", "8/8"],
      correctAnswer: 1,
      explanation: "La pizza entière représente 8/8. Si tu en as mangé 2/8, il reste 8/8 - 2/8 = 6/8."
    }
  ];

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;
  const isQuizComplete = currentQuestion === questions.length - 1 && showResult;

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
      if (isCorrect && !answeredQuestions.includes(currentQuestion)) {
        setScore(score + 1);
        setAnsweredQuestions([...answeredQuestions, currentQuestion]);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl mb-2">Quiz : Les fractions 📝</h1>
        <p className="text-green-100">Teste tes connaissances et gagne des points !</p>
      </motion.div>

      {/* Progression du quiz */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <span className="text-sm font-medium text-green-600">
            Score : {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full"
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
      </div>

      {!isQuizComplete ? (
        <>
          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl mb-8">{currentQ.question}</h2>

              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectAnswer = index === currentQ.correctAnswer;
                  
                  let bgColor = 'bg-white hover:bg-gray-50';
                  let borderColor = 'border-gray-200';
                  
                  if (showResult) {
                    if (isCorrectAnswer) {
                      bgColor = 'bg-green-50';
                      borderColor = 'border-green-500';
                    } else if (isSelected && !isCorrect) {
                      bgColor = 'bg-red-50';
                      borderColor = 'border-red-500';
                    }
                  } else if (isSelected) {
                    bgColor = 'bg-blue-50';
                    borderColor = 'border-blue-500';
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: showResult ? 1 : 1.02 }}
                      whileTap={{ scale: showResult ? 1 : 0.98 }}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl border-2 ${borderColor} ${bgColor} text-left transition-all relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg">{option}</span>
                        {showResult && isCorrectAnswer && (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Résultat et explication */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`rounded-xl p-6 mb-6 ${
                      isCorrect ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Lightbulb className={`w-6 h-6 mt-0.5 ${isCorrect ? 'text-green-600' : 'text-orange-600'}`} />
                      <div>
                        <h3 className={`font-medium mb-2 ${isCorrect ? 'text-green-900' : 'text-orange-900'}`}>
                          {isCorrect ? 'Bravo ! 🎉' : 'Pas tout à fait... 🤔'}
                        </h3>
                        <p className="text-sm text-gray-700">{currentQ.explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Boutons d'action */}
              <div className="flex gap-3">
                {!showResult ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                    className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    Valider ma réponse
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-xl hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
                  >
                    {currentQuestion < questions.length - 1 ? (
                      <>
                        Question suivante
                        <ArrowRight className="w-5 h-5" />
                      </>
                    ) : (
                      'Voir mes résultats'
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        /* Écran de résultats */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
        >
          <div className="inline-flex p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl mb-4">Quiz terminé !</h2>
          <p className="text-xl text-gray-600 mb-8">
            Tu as obtenu <span className="text-green-600 font-bold">{score}/{questions.length}</span> bonnes réponses
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-lg font-medium text-blue-900">
                {Math.round((score / questions.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Taux de réussite</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-lg font-medium text-green-900">+{score * 10}</div>
              <div className="text-sm text-gray-600">Points gagnés</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-lg font-medium text-purple-900">Nouveau</div>
              <div className="text-sm text-gray-600">Badge débloqué</div>
            </div>
          </div>

          {score === questions.length && (
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-6 mb-6">
              <h3 className="text-xl mb-2">Parfait ! 🎉</h3>
              <p>Tu maîtrises parfaitement les fractions. Continue comme ça !</p>
            </div>
          )}

          {score < questions.length && score >= questions.length * 0.6 && (
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 mb-6">
              <h3 className="text-xl mb-2">Très bien ! 👏</h3>
              <p>Tu es sur la bonne voie. Encore un petit effort et ce sera parfait !</p>
            </div>
          )}

          {score < questions.length * 0.6 && (
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl p-6 mb-6">
              <h3 className="text-xl mb-2">Continue à t'entraîner ! 💪</h3>
              <p>N'hésite pas à revoir le cours et à refaire le quiz. Tu vas y arriver !</p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleRestart}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              Recommencer le quiz
            </button>
            <button className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-xl hover:opacity-90 transition-opacity font-medium">
              Continuer le cours
            </button>
          </div>
        </motion.div>
      )}

      {/* Astuces */}
      {!isQuizComplete && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-2">Astuce</h3>
              <p className="text-sm text-blue-800">
                Prends ton temps pour réfléchir. Si tu te trompes, ce n'est pas grave ! 
                Tu pourras voir l'explication et mieux comprendre.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
