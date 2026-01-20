import { BookOpen, Trophy, Bell, TrendingUp, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  userName?: string;
}

export function HomePage({ userName = 'Emma' }: HomePageProps) {
  const notifications = [
    { id: 1, message: "Nouveau cours de Mathématiques disponible !", time: "Il y a 2h" },
    { id: 2, message: "Bravo ! Tu as obtenu le badge 'Lecteur assidu'", time: "Hier" },
    { id: 3, message: "N'oublie pas ton quiz de Sciences pour demain", time: "Hier" }
  ];

  const recentCourses = [
    { id: 1, name: "Les fractions", subject: "Mathématiques", progress: 75, color: "bg-blue-500" },
    { id: 2, name: "La photosynthèse", subject: "Sciences", progress: 60, color: "bg-green-500" },
    { id: 3, name: "Le passé composé", subject: "Français", progress: 90, color: "bg-purple-500" },
    { id: 4, name: "La Révolution française", subject: "Histoire", progress: 45, color: "bg-orange-500" }
  ];

  const stats = [
    { label: "Cours suivis", value: "12", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
    { label: "Badges obtenus", value: "8", icon: Trophy, color: "bg-yellow-100 text-yellow-600" },
    { label: "Points cette semaine", value: "245", icon: Star, color: "bg-purple-100 text-purple-600" },
    { label: "Temps d'étude", value: "8h", icon: TrendingUp, color: "bg-green-100 text-green-600" }
  ];

  return (
    <div className="space-y-6">
      {/* En-tête de bienvenue */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl mb-2">Bonjour, {userName} ! 👋</h1>
            <p className="text-blue-100">Prête à apprendre de nouvelles choses aujourd'hui ?</p>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
            <Calendar className="w-5 h-5" />
            <span>Mardi 13 Janvier 2026</span>
          </div>
        </div>
      </motion.div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className={`inline-flex p-3 rounded-lg ${stat.color} mb-3`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-2xl mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Cours en cours */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Cours en cours
          </h2>
          <button className="text-blue-600 text-sm hover:underline">Voir tout</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {recentCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="mb-1">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.subject}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${course.color}`}></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progression</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-2 rounded-full ${course.color}`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl">Notifications</h2>
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}