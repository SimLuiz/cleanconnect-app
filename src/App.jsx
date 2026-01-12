import React, { useState } from 'react';
import { Star, MapPin, Calendar, CreditCard, MessageCircle, User, Home, Settings, ChevronLeft, Check, Clock } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [userType, setUserType] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'company', text: 'Olá! Bem-vinda à LimpaTudo Serviços', time: '14:23' },
    { id: 2, sender: 'company', text: 'Como posso te ajudar hoje?', time: '14:23' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const services = [
    { id: 1, name: 'Limpeza Residencial Completa', category: 'Residencial', price: 'R$ 180', duration: '3-4 horas', icon: '🏠', description: 'Limpeza completa de todos os cômodos' },
    { id: 2, name: 'Limpeza Pós-Obra', category: 'Especializada', price: 'R$ 350', duration: '4-6 horas', icon: '🏗️', description: 'Limpeza pesada após reformas' },
    { id: 3, name: 'Faxina de Apartamento', category: 'Residencial', price: 'R$ 120', duration: '2-3 horas', icon: '🏢', description: 'Limpeza geral para apartamentos' },
    { id: 4, name: 'Limpeza de Escritório', category: 'Comercial', price: 'R$ 250', duration: '3 horas', icon: '🏢', description: 'Limpeza profissional corporativa' }
  ];

  const serviceHistory = [
    { id: 1, service: 'Limpeza Residencial Completa', date: '05/01/2026', time: '08:00', price: 'R$ 180', rated: true, rating: 5 },
    { id: 2, service: 'Faxina de Apartamento', date: '28/12/2025', time: '14:00', price: 'R$ 120', rated: true, rating: 5 },
    { id: 3, service: 'Limpeza Residencial Completa', date: '15/12/2025', time: '10:00', price: 'R$ 180', rated: false, rating: 0 },
    { id: 4, service: 'Limpeza Pós-Obra', date: '01/12/2025', time: '08:00', price: 'R$ 350', rated: true, rating: 4 }
  ];

  if (!userType) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">CleanConnect</h1>
          <p className="text-gray-600">Serviços de limpeza profissional</p>
        </div>
        <div className="w-full max-w-sm space-y-3">
          <button onClick={() => setUserType('client')} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold shadow-lg">
            Entrar como Cliente
          </button>
          <button onClick={() => setUserType('provider')} className="w-full bg-white border-2 border-pink-500 text-pink-600 py-4 rounded-xl font-semibold">
            Entrar como Prestador
          </button>
        </div>
      </div>
    );
  }

  const ClientHomeView = () => (
    <div className="p-4 pb-24">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Olá, Beatriz!</h1>
        <p className="text-gray-600">Que tipo de limpeza você precisa?</p>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-4 mb-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-pink-100 text-sm mb-1">Empresa parceira</p>
            <h3 className="text-xl font-bold">LimpaTudo Serviços</h3>
            <div className="flex items-center gap-2 mt-2">
              <Star className="fill-yellow-300 text-yellow-300" size={16} />
              <span className="font-semibold">4.9</span>
              <span className="text-pink-100">(342 avaliações)</span>
            </div>
          </div>
          <div className="text-5xl">✨</div>
        </div>
      </div>

      <div className="space-y-3">
        {services.map(service => (
          <div key={service.id} onClick={() => { setSelectedService(service); setCurrentView('detail'); }} className="bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex gap-3">
              <div className="text-4xl">{service.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.category}</p>
                  </div>
                  <span className="font-bold text-pink-600 text-lg">{service.price}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                  <Clock size={14} />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ServiceDetailView = () => (
    <div className="pb-24">
      <div className="relative h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
        <button onClick={() => setCurrentView('home')} className="absolute top-4 left-4 bg-white rounded-full p-2">
          <ChevronLeft size={24} />
        </button>
        <div className="text-8xl">{selectedService?.icon}</div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{selectedService?.name}</h1>
        <p className="text-pink-600 font-semibold mb-4">{selectedService?.category}</p>
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Valor do serviço</p>
              <p className="text-3xl font-bold text-pink-600">{selectedService?.price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Duração</p>
              <p className="text-lg font-semibold text-gray-800">{selectedService?.duration}</p>
            </div>
          </div>
        </div>
        <button onClick={() => { setBookingStep(1); setCurrentView('booking'); }} className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold">
          Contratar Serviço
        </button>
      </div>
    </div>
  );

  const BookingView = () => (
    <div className="p-4 pb-24">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => setCurrentView('detail')} className="p-2">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Agendamento - Etapa {bookingStep}/3</h1>
      </div>

      {bookingStep === 1 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">Escolha data e horário</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-3">Selecione o dia</h3>
            <div className="grid grid-cols-4 gap-2">
              {['Hoje 12/01', 'Amanhã 13/01', 'Qua 14/01', 'Qui 15/01', 'Sex 16/01', 'Sáb 17/01', 'Dom 18/01', 'Seg 19/01'].map((date, idx) => (
                <button key={idx} className={`py-3 px-2 rounded-lg border-2 text-sm ${idx === 0 ? 'border-pink-500 bg-pink-50 text-pink-600 font-semibold' : 'border-gray-200 hover:border-pink-300'}`}>
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-3">Horários disponíveis</h3>
            <div className="grid grid-cols-3 gap-2">
              {['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'].map((time, idx) => (
                <button key={time} className={`py-3 rounded-lg border-2 font-medium ${idx === 0 ? 'border-pink-500 bg-pink-50 text-pink-600' : 'border-pink-200 text-pink-600 hover:bg-pink-50'}`}>
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => setBookingStep(2)} className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold">
            Continuar
          </button>
        </div>
      )}

      {bookingStep === 2 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">Endereço do serviço</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-pink-500 mt-1" size={20} />
              <div className="flex-1">
                <p className="font-semibold mb-1">Minha casa</p>
                <p className="text-sm text-gray-600">Rua das Flores, 123 - Apto 45</p>
                <p className="text-sm text-gray-600">Centro, Formosa - GO, 73800-000</p>
              </div>
              <button className="text-pink-500 text-sm font-medium">Editar</button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-2">Observações (opcional)</h3>
            <textarea placeholder="Ex: Apartamento no 3º andar, portão azul..." className="w-full p-3 border border-gray-300 rounded-lg text-sm" rows="3" />
          </div>

          <div className="flex gap-2">
            <button onClick={() => setBookingStep(1)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold">
              Voltar
            </button>
            <button onClick={() => setBookingStep(3)} className="flex-1 bg-pink-500 text-white py-4 rounded-xl font-semibold">
              Continuar
            </button>
          </div>
        </div>
      )}

      {bookingStep === 3 && (
        <div>
          <h2 className="font-semibold text-lg mb-4">Pagamento</h2>
          
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-3">Resumo do pedido</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Serviço</span>
                <span className="font-medium">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Data/Hora</span>
                <span className="font-medium">Hoje, 08:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duração</span>
                <span className="font-medium">{selectedService?.duration}</span>
              </div>
              <div className="border-t border-pink-300 pt-2 mt-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg text-pink-600">{selectedService?.price}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="text-pink-500" size={24} />
              <span className="font-semibold">Cartão de crédito</span>
            </div>
            <input type="text" placeholder="Número do cartão" className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2" />
            <div className="flex gap-2">
              <input type="text" placeholder="Validade" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" />
              <input type="text" placeholder="CVV" className="w-24 px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
            <p className="text-sm text-green-800">✓ Pagamento 100% seguro e protegido</p>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setBookingStep(2)} className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold">
              Voltar
            </button>
            <button onClick={() => setCurrentView('confirmation')} className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold">
              Confirmar Pagamento
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const ConfirmationView = () => (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <Check size={48} className="text-green-600" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Serviço Contratado!</h1>
      <button onClick={() => setCurrentView('home')} className="mt-6 bg-pink-500 text-white py-4 px-8 rounded-xl font-semibold">
        Voltar ao Início
      </button>
    </div>
  );

  const ChatView = () => {
    const handleSendMessage = () => {
      if (newMessage.trim()) {
        setChatMessages([...chatMessages, { id: chatMessages.length + 1, sender: 'user', text: newMessage, time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) }]);
        setNewMessage('');
      }
    };

    return (
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 flex items-center gap-3">
          <button onClick={() => setCurrentView('home')} className="p-2">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">✨</div>
            <h2 className="font-semibold">LimpaTudo Serviços</h2>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-2xl px-4 py-3 ${msg.sender === 'user' ? 'bg-pink-500 text-white' : 'bg-white border text-gray-800'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t p-4">
          <div className="flex gap-2">
            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Digite..." className="flex-1 px-4 py-3 border rounded-full" />
            <button onClick={handleSendMessage} className="bg-pink-500 text-white p-3 rounded-full">
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const HistoryView = () => (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Histórico</h1>
      <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-6 mb-6 text-white text-center">
        <p className="text-5xl font-bold mb-2">{serviceHistory.length}</p>
        <p className="text-sm">Serviços realizados</p>
      </div>
      <div className="space-y-3">
        {serviceHistory.map((service) => (
          <div key={service.id} className="bg-white border rounded-2xl p-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{service.service}</h3>
              <span className="font-bold text-pink-600">{service.price}</span>
            </div>
            <p className="text-sm text-gray-500">{service.date} às {service.time}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Meu Perfil</h1>
      <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-6 mb-6 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">👩🏻</div>
          <div>
            <h2 className="text-xl font-bold">Beatriz Oliveira</h2>
            <p className="text-pink-100">beatriz@email.com</p>
            <p className="text-pink-100">(62) 99999-1234</p>
          </div>
        </div>
        <div className="flex gap-4 text-center">
          <div className="flex-1 bg-white bg-opacity-20 rounded-xl p-3">
            <p className="text-2xl font-bold">{serviceHistory.length}</p>
            <p className="text-sm text-pink-100">Serviços</p>
          </div>
          <div className="flex-1 bg-white bg-opacity-20 rounded-xl p-3">
            <p className="text-2xl font-bold">4.8</p>
            <p className="text-sm text-pink-100">Avaliação</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <button onClick={() => setCurrentView('history')} className="w-full bg-white border rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="text-pink-500" size={24} />
            <span className="font-medium">Histórico de Serviços</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>
        <button className="w-full bg-white border rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CreditCard className="text-pink-500" size={24} />
            <span className="font-medium">Formas de Pagamento</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>
        <button className="w-full bg-white border rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="text-pink-500" size={24} />
            <span className="font-medium">Meus Endereços</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>
        <button className="w-full bg-white border rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="text-pink-500" size={24} />
            <span className="font-medium">Configurações</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>
      </div>
      <button onClick={() => setUserType(null)} className="w-full mt-6 bg-red-50 text-red-600 py-3 rounded-xl font-semibold">
        Sair da conta
      </button>
    </div>
  );

  const ProviderHomeView = () => (
    <div className="p-4 pb-24">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Painel da Empresa 💼</h1>
        <p className="text-gray-600">LimpaTudo Serviços</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 text-white">
          <p className="text-green-100 text-sm mb-1">Hoje</p>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm">Agendamentos</p>
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-4 text-white">
          <p className="text-blue-100 text-sm mb-1">Este mês</p>
          <p className="text-3xl font-bold">13</p>
          <p className="text-sm">Serviços</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Sua avaliação</h3>
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
            <span className="text-xl font-bold">4.9</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">342 avaliações de clientes</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-3">Próximos agendamentos (Hoje)</h2>
        <div className="space-y-3">
          {[
            { time: '08:00', client: 'Beatriz O.', service: 'Limpeza Residencial', address: 'Rua das Flores, 123' },
            { time: '10:00', client: 'Carlos M.', service: 'Faxina de Apartamento', address: 'Av. Central, 456' },
            { time: '14:00', client: 'Ana S.', service: 'Limpeza Pós-Obra', address: 'Rua do Comércio, 789' }
          ].map((booking, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-gray-800">{booking.client}</p>
                  <p className="text-sm text-gray-600">{booking.service}</p>
                </div>
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {booking.time}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} />
                <span>{booking.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Serviços oferecidos</h2>
        <div className="grid grid-cols-2 gap-3">
          {services.map(service => (
            <div key={service.id} onClick={() => { setSelectedService(service); setCurrentView('detail'); }} className="bg-white border border-gray-200 rounded-xl p-3 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">{service.icon}</div>
              <p className="font-semibold text-sm text-gray-800 mb-1">{service.name}</p>
              <p className="text-pink-600 font-bold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProviderAgendaView = () => (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Agenda de Serviços</h1>
      
      <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-6 mb-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-purple-100 text-sm mb-1">Total do mês</p>
            <p className="text-4xl font-bold">13</p>
            <p className="text-sm text-purple-100">agendamentos</p>
          </div>
          <div className="text-right">
            <p className="text-purple-100 text-sm mb-1">Faturamento previsto</p>
            <p className="text-2xl font-bold">R$ 2.340</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4">
        <h2 className="font-semibold text-lg mb-4">Janeiro 2026</h2>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
            <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {[...Array(31)].map((_, i) => {
            const dayNum = i + 1;
            const isToday = dayNum === 12;
            const hasBookings = [12, 13, 15].includes(dayNum);
            
            return (
              <button key={i} className={`aspect-square rounded-lg text-sm transition-all relative ${
                isToday ? 'bg-pink-500 text-white font-bold' : hasBookings ? 'bg-green-100 text-green-800 font-semibold border-2 border-green-300' : 'border border-gray-200 text-gray-700'
              }`}>
                {dayNum}
                {hasBookings && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-500 rounded"></div>
            <span className="text-gray-600">Hoje</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded"></div>
            <span className="text-gray-600">Com agendamento</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ProviderReviewsView = () => (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Avaliações de Clientes</h1>
      
      <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 mb-6 text-white">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="fill-white" size={32} />
            <span className="text-5xl font-bold">4.9</span>
          </div>
          <p className="text-yellow-100 mb-1">Classificação média</p>
          <p className="text-sm text-yellow-100">Baseado em 342 avaliações</p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Paula R.', rating: 5, service: 'Limpeza Residencial', comment: 'Equipe super profissional! Deixaram minha casa impecável.', date: '2 dias atrás' },
          { name: 'Carlos M.', rating: 5, service: 'Limpeza Pós-Obra', comment: 'Fizeram um trabalho excelente após a reforma.', date: '1 semana atrás' },
          { name: 'Fernanda S.', rating: 4, service: 'Faxina de Apartamento', comment: 'Muito bom! Só o horário que atrasou uns 15 minutos.', date: '2 semanas atrás' }
        ].map((review, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-pink-600 font-medium mb-2">{review.service}</p>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative">
      {userType === 'client' && (
        <>
          {currentView === 'home' && <ClientHomeView />}
          {currentView === 'detail' && <ServiceDetailView />}
          {currentView === 'booking' && <BookingView />}
          {currentView === 'confirmation' && <ConfirmationView />}
          {currentView === 'chat' && <ChatView />}
          {currentView === 'history' && <HistoryView />}
          {currentView === 'profile' && <ProfileView />}
        </>
      )}

      {userType === 'provider' && (
        <>
          {currentView === 'home' && <ProviderHomeView />}
          {currentView === 'provider-home' && <ProviderHomeView />}
          {currentView === 'agenda' && <ProviderAgendaView />}
          {currentView === 'reviews' && <ProviderReviewsView />}
        </>
      )}

      {currentView !== 'confirmation' && currentView !== 'chat' && userType === 'client' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t max-w-md mx-auto">
          <div className="flex justify-around py-3">
            <button onClick={() => setCurrentView('home')} className={`flex flex-col items-center gap-1 ${currentView === 'home' ? 'text-pink-500' : 'text-gray-400'}`}>
              <Home size={24} />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button onClick={() => setCurrentView('history')} className={`flex flex-col items-center gap-1 ${currentView === 'history' ? 'text-pink-500' : 'text-gray-400'}`}>
              <Calendar size={24} />
              <span className="text-xs font-medium">Histórico</span>
            </button>
            <button onClick={() => setCurrentView('chat')} className={`flex flex-col items-center gap-1 ${currentView === 'chat' ? 'text-pink-500' : 'text-gray-400'}`}>
              <MessageCircle size={24} />
              <span className="text-xs font-medium">Chat</span>
            </button>
            <button onClick={() => setCurrentView('profile')} className={`flex flex-col items-center gap-1 ${currentView === 'profile' ? 'text-pink-500' : 'text-gray-400'}`}>
              <User size={24} />
              <span className="text-xs font-medium">Perfil</span>
            </button>
          </div>
        </div>
      )}

      {userType === 'provider' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t max-w-md mx-auto">
          <div className="flex justify-around py-3">
            <button onClick={() => setCurrentView('provider-home')} className={`flex flex-col items-center gap-1 ${currentView === 'home' || currentView === 'provider-home' ? 'text-pink-500' : 'text-gray-400'}`}>
              <Home size={24} />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button onClick={() => setCurrentView('agenda')} className={`flex flex-col items-center gap-1 ${currentView === 'agenda' ? 'text-pink-500' : 'text-gray-400'}`}>
              <Calendar size={24} />
              <span className="text-xs font-medium">Agenda</span>
            </button>
            <button onClick={() => setCurrentView('reviews')} className={`flex flex-col items-center gap-1 ${currentView === 'reviews' ? 'text-pink-500' : 'text-gray-400'}`}>
              <Star size={24} />
              <span className="text-xs font-medium">Avaliações</span>
            </button>
            <button onClick={() => setUserType(null)} className="flex flex-col items-center gap-1 text-gray-400">
              <Settings size={24} />
              <span className="text-xs font-medium">Sair</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;