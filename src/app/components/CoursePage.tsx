import { Play, FileText, Download, CheckCircle, Circle, Clock, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function CoursePage() {
  const courseContent = [
    { 
      id: 1, 
      title: "Introduction aux fractions", 
      type: "video", 
      duration: "8 min", 
      completed: true 
    },
    { 
      id: 2, 
      title: "Qu'est-ce qu'une fraction ?", 
      type: "text", 
      duration: "5 min", 
      completed: true 
    },
    { 
      id: 3, 
      title: "Simplification des fractions", 
      type: "video", 
      duration: "12 min", 
      completed: true 
    },
    { 
      id: 4, 
      title: "Exercices pratiques", 
      type: "exercise", 
      duration: "15 min", 
      completed: false,
      current: true
    },
    { 
      id: 5, 
      title: "Addition de fractions", 
      type: "video", 
      duration: "10 min", 
      completed: false 
    },
    { 
      id: 6, 
      title: "Quiz final", 
      type: "quiz", 
      duration: "20 min", 
      completed: false 
    }
  ];

  const resources = [
    { name: "Fiche de révision - Les fractions.pdf", size: "2.4 MB" },
    { name: "Tableau de simplification.pdf", size: "1.1 MB" },
    { name: "Exercices complémentaires.pdf", size: "3.2 MB" }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Colonne principale - Contenu du cours */}
      <div className="lg:col-span-2 space-y-6">
        {/* En-tête du cours */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="flex items-center gap-2 text-blue-100 mb-3">
            <BookOpen className="w-5 h-5" />
            <span>Mathématiques • Niveau 5ème</span>
          </div>
          <h1 className="text-3xl mb-3">Les fractions</h1>
          <p className="text-blue-100 mb-6">
            Apprends à comprendre, manipuler et calculer avec les fractions de manière simple et ludique.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span>1h 10min</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <FileText className="w-4 h-4" />
              <span>6 sections</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4" />
              <span>50% complété</span>
            </div>
          </div>
        </motion.div>

        {/* Vidéo/Contenu actuel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
            </motion.button>
          </div>
          <div className="p-6">
            <h2 className="text-xl mb-3">Exercices pratiques</h2>
            <p className="text-gray-600 mb-6">
              Mets en pratique tes connaissances avec ces exercices interactifs. 
              N'hésite pas à réessayer si tu te trompes, c'est en pratiquant qu'on apprend !
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Commencer les exercices
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Contenu détaillé */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg mb-4">À propos de ce cours</h3>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-3">
            <p>
              Les fractions sont partout dans notre quotidien ! Que ce soit pour partager une pizza, 
              mesurer des ingrédients en cuisine, ou comprendre des pourcentages, les fractions sont essentielles.
            </p>
            <p>
              Dans ce cours, tu vas apprendre :
            </p>
            <ul className="space-y-2 ml-5 list-disc">
              <li>Ce qu'est une fraction et comment la lire</li>
              <li>Comment simplifier les fractions</li>
              <li>Comment additionner et soustraire des fractions</li>
              <li>Des astuces pour mieux comprendre et mémoriser</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Colonne latérale */}
      <div className="space-y-6">
        {/* Progression */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg mb-4">Ta progression</h3>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">3 sur 6 complétés</span>
              <span className="text-blue-600 font-medium">50%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
              ></motion.div>
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-900">
              Continue comme ça ! Tu es à mi-chemin ! 🎉
            </p>
          </div>
        </div>

        {/* Plan du cours */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg mb-4">Plan du cours</h3>
          <div className="space-y-2">
            {courseContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                  item.current 
                    ? 'bg-blue-50 border-l-4 border-blue-600' 
                    : item.completed 
                    ? 'hover:bg-gray-50' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="mt-0.5">
                  {item.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm mb-1 ${item.current ? 'text-blue-600 font-medium' : ''}`}>
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ressources */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg mb-4">Ressources</h3>
          <div className="space-y-2">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{resource.name}</p>
                  <p className="text-xs text-gray-500">{resource.size}</p>
                </div>
                <Download className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
