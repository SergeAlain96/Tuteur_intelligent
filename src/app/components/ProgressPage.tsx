import { Trophy, Star, Zap, Award, TrendingUp, Target, Medal, Crown } from 'lucide-react';
import { motion } from 'motion/react';

export function ProgressPage() {
  const badges = [
    { 
      id: 1, 
      name: "Premier pas", 
      description: "Complète ton premier cours", 
      icon: Star, 
      color: "from-yellow-400 to-orange-500",
      earned: true,
      date: "15 Déc 2025"
    },
    { 
      id: 2, 
      name: "Lecteur assidu", 
      description: "Lis 10 leçons", 
      icon: Award, 
      color: "from-blue-400 to-blue-600",
      earned: true,
      date: "20 Déc 2025"
    },
    { 
      id: 3, 
      name: "Mathématicien", 
      description: "Termine tous les cours de maths", 
      icon: Trophy, 
      color: "from-purple-400 to-purple-600",
      earned: true,
      date: "5 Jan 2026"
    },
    { 
      id: 4, 
      name: "Éclair", 
      description: "Réponds correctement à 10 quiz d'affilée", 
      icon: Zap, 
      color: "from-yellow-400 to-yellow-600",
      earned: false,
      progress: 7
    },
    { 
      id: 5, 
      name: "Expert", 
      description: "Obtiens 100% à 5 quiz", 
      icon: Target, 
      color: "from-green-400 to-green-600",
      earned: false,
      progress: 3
    },
    { 
      id: 6, 
      name: "Champion", 
      description: "Accumule 1000 points", 
      icon: Medal, 
      color: "from-pink-400 to-pink-600",
      earned: false,
      progress: 650
    },
    { 
      id: 7, 
      name: "Persévérant", 
      description: "Étudie 7 jours d'affilée", 
      icon: TrendingUp, 
      color: "from-indigo-400 to-indigo-600",
      earned: false,
      progress: 4
    },
    { 
      id: 8, 
      name: "Roi du savoir", 
      description: "Débloque tous les badges", 
      icon: Crown, 
      color: "from-red-400 to-red-600",
      earned: false,
      progress: 3
    }
  ];

  const subjectProgress = [
    { name: "Mathématiques", progress: 75, lessons: 18, total: 24, color: "bg-blue-500" },
    { name: "Français", progress: 75, lessons: 15, total: 20, color: "bg-purple-500" },
    { name: "Sciences", progress: 67, lessons: 12, total: 18, color: "bg-green-500" },
    { name: "Histoire-Géo", progress: 45, lessons: 10, total: 22, color: "bg-orange-500" },
    { name: "Arts", progress: 67, lessons: 8, total: 12, color: "bg-pink-500" },
    { name: "Langues", progress: 69, lessons: 11, total: 16, color: "bg-teal-500" }
  ];

  const recentAchievements = [
    { text: "Tu as terminé le cours 'Les fractions'", date: "Aujourd'hui", points: 50 },
    { text: "Quiz réussi avec 90%", date: "Aujourd'hui", points: 30 },
    { text: "Badge 'Mathématicien' débloqué", date: "5 Jan", points: 100 },
    { text: "7 jours de suite d'apprentissage", date: "3 Jan", points: 75 }
  ];

  const earnedBadges = badges.filter(b => b.earned);
  const inProgressBadges = badges.filter(b => !b.earned);
  const totalPoints = 1245;
  const level = Math.floor(totalPoints / 200) + 1;
  const pointsForNextLevel = (level * 200) - totalPoints;

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl mb-2">Tes Réussites 🎉</h1>
            <p className="text-purple-100">Continue comme ça, tu es sur la bonne voie !</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
              <div className="text-sm text-purple-100 mb-1">Niveau</div>
              <div className="text-3xl">{level}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
              <div className="text-sm text-purple-100 mb-1">Points totaux</div>
              <div className="text-3xl">{totalPoints}</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progression vers le prochain niveau */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg">Prochain niveau</h2>
          <span className="text-sm text-gray-600">Encore {pointsForNextLevel} points</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((totalPoints % 200) / 200) * 100}%` }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 h-4 rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Badges obtenus */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">Badges obtenus</h2>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              {earnedBadges.length}/{badges.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {earnedBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${badge.color} rounded-full mb-3`}>
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{badge.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{badge.description}</p>
                  <p className="text-xs text-green-600">✓ Obtenu le {badge.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Badges en cours */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl mb-6">Badges à débloquer</h2>
          <div className="space-y-4">
            {inProgressBadges.map((badge, index) => {
              const progressPercent = badge.progress 
                ? badge.id === 4 ? (badge.progress / 10) * 100
                  : badge.id === 5 ? (badge.progress / 5) * 100
                  : badge.id === 6 ? (badge.progress / 1000) * 100
                  : badge.id === 7 ? (badge.progress / 7) * 100
                  : (badge.progress / 8) * 100
                : 0;

              return (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className={`p-3 bg-gradient-to-br ${badge.color} rounded-lg opacity-50`}>
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{badge.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        className={`bg-gradient-to-r ${badge.color} h-2 rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progression par matière */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl mb-6">Progression par matière</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectProgress.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{subject.name}</h3>
                <span className="text-sm text-gray-600">{subject.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${subject.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                  className={`${subject.color} h-3 rounded-full`}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-600">
                {subject.lessons}/{subject.total} leçons complétées
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Réussites récentes */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl mb-6">Réussites récentes</h2>
        <div className="space-y-3">
          {recentAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium">{achievement.text}</p>
                  <p className="text-sm text-gray-600">{achievement.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-600 font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>+{achievement.points}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message d'encouragement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center"
      >
        <div className="text-5xl mb-4">🌟</div>
        <h2 className="text-2xl mb-3">Continue comme ça !</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Tu fais des progrès incroyables ! Chaque jour, tu apprends de nouvelles choses et tu te rapproches de tes objectifs. 
          Continue à travailler avec autant d'enthousiasme !
        </p>
      </motion.div>
    </div>
  );
}
