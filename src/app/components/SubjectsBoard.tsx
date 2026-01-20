import { Calculator, BookText, Atom, Globe, Palette, Music, DumbbellIcon, Languages } from 'lucide-react';
import { motion } from 'motion/react';

export function SubjectsBoard() {
  const subjects = [
    {
      id: 1,
      name: "Mathématiques",
      icon: Calculator,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      lessons: 24,
      completed: 18,
      nextLesson: "Les équations du premier degré"
    },
    {
      id: 2,
      name: "Français",
      icon: BookText,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      lessons: 20,
      completed: 15,
      nextLesson: "L'analyse grammaticale"
    },
    {
      id: 3,
      name: "Sciences",
      icon: Atom,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      lessons: 18,
      completed: 12,
      nextLesson: "Les états de la matière"
    },
    {
      id: 4,
      name: "Histoire-Géographie",
      icon: Globe,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      lessons: 22,
      completed: 10,
      nextLesson: "La Première Guerre mondiale"
    },
    {
      id: 5,
      name: "Arts Plastiques",
      icon: Palette,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      lessons: 12,
      completed: 8,
      nextLesson: "Les techniques de peinture"
    },
    {
      id: 6,
      name: "Musique",
      icon: Music,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      lessons: 15,
      completed: 9,
      nextLesson: "Le rythme et la mélodie"
    },
    {
      id: 7,
      name: "Éducation Physique",
      icon: DumbbellIcon,
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      lessons: 10,
      completed: 7,
      nextLesson: "Les sports collectifs"
    },
    {
      id: 8,
      name: "Langues Vivantes",
      icon: Languages,
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      lessons: 16,
      completed: 11,
      nextLesson: "Les verbes irréguliers"
    }
  ];

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl mb-2">Mes matières</h1>
        <p className="text-gray-600">Sélectionne une matière pour commencer à apprendre</p>
      </div>

      {/* Grille des matières */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => {
          const progress = Math.round((subject.completed / subject.lessons) * 100);
          
          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              {/* En-tête de la carte avec gradient */}
              <div className={`bg-gradient-to-br ${subject.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${subject.bgColor} rounded-xl`}>
                    <subject.icon className={`w-8 h-8 ${subject.textColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl">{subject.completed}/{subject.lessons}</div>
                    <div className="text-sm text-white/80">leçons</div>
                  </div>
                </div>
                <h3 className="text-xl">{subject.name}</h3>
              </div>

              {/* Corps de la carte */}
              <div className="p-6 space-y-4">
                {/* Barre de progression */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Progression</span>
                    <span className={`font-medium ${subject.textColor}`}>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                      className={`bg-gradient-to-r ${subject.color} h-2.5 rounded-full`}
                    ></motion.div>
                  </div>
                </div>

                {/* Prochaine leçon */}
                <div className={`${subject.bgColor} rounded-lg p-3`}>
                  <p className="text-xs text-gray-600 mb-1">Prochaine leçon</p>
                  <p className={`text-sm ${subject.textColor}`}>{subject.nextLesson}</p>
                </div>

                {/* Bouton d'action */}
                <button className={`w-full bg-gradient-to-r ${subject.color} text-white py-3 rounded-lg hover:opacity-90 transition-opacity`}>
                  Continuer
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Statistiques rapides */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
        <h2 className="text-2xl mb-6">Tes statistiques cette semaine</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-2">42</div>
            <div className="text-sm text-white/90">Leçons complétées</div>
          </div>
          <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-2">87%</div>
            <div className="text-sm text-white/90">Taux de réussite</div>
          </div>
          <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl mb-2">15h</div>
            <div className="text-sm text-white/90">Temps d'étude</div>
          </div>
        </div>
      </div>
    </div>
  );
}
